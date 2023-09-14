const ArduinoIotClient = require('@arduino/arduino-iot-client');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerDefinition');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

var rp = require('request-promise');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

async function getToken() {
    var options = {
        method: 'POST',
        url: 'https://api2.arduino.cc/iot/v1/clients/token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        json: true,
        form: {
            grant_type: 'client_credentials',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            audience: 'https://api2.arduino.cc/iot'
        }
    };

    try {
        const response = await rp(options);
        return response['access_token'];
    }
    catch (error) {
        console.error("Failed getting an access token: " + error)
    }
}

const configureOAuth2 = async (req, res, next) => {
    const client = ArduinoIotClient.ApiClient.instance;
    const oauth2 = client.authentications['oauth2'];
    oauth2.accessToken = await getToken();
    req.api = new ArduinoIotClient.DevicesV2Api(client);
    next();
};

app.get('/devices', async (req, res) => {
    try {
        const client = ArduinoIotClient.ApiClient.instance;
        const oauth2 = client.authentications['oauth2'];
        oauth2.accessToken = await getToken();
        const api = new ArduinoIotClient.DevicesV2Api(client);
        const devices = await api.devicesV2List();
        res.json(devices);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/thingInformation', configureOAuth2, async (req, res) => {
    try {
        const client = ArduinoIotClient.ApiClient.instance;
        const oauth2 = client.authentications['oauth2'];
        oauth2.accessToken = await getToken();
        const api = new ArduinoIotClient.ThingsV2Api(client);
        const things = await api.thingsV2List();
        res.json({ value: things });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/thingValue', configureOAuth2, async (req, res) => {
    try {
        const { thingid } = req.query;
        if (!thingid) {
            return res.status(400).json({ error: 'Missing thingid query parameter' });
        }
        const client = ArduinoIotClient.ApiClient.instance;
        const oauth2 = client.authentications['oauth2'];
        oauth2.accessToken = await getToken();
        var api = new ArduinoIotClient.ThingsV2Api(client);
        const value = await api.thingsV2Show(thingid);
        res.json({ value: value });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Start the Express.js server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
