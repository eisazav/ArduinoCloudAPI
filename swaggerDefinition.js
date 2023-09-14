const swaggerSpec = {
    swagger: '2.0',
    info: {
        title: 'Iot Cloud api',
        version: '1.0.0',
    },
    paths: {
        '/devices':
        {
            get:
            {
                summary: 'Get the list of devices',
                description: 'Returns a list of devices.',
                responses:
                {
                    '200':
                    {
                        description: 'A list of devices.',
                        schema:
                        {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    href: {
                                        type: "string",
                                        description: "The URL of the device."
                                    },
                                    id: {
                                        type: "string",
                                        description: "The unique ID of the device."
                                    },
                                    label: {
                                        type: "string",
                                        description: "The label of the device."
                                    },
                                    name: {
                                        type: "string",
                                        description: "The name of the device."
                                    },
                                    serial: {
                                        type: "string",
                                        description: "The serial number of the device."
                                    },
                                    type: {
                                        type: "string",
                                        description: "The type of the device."
                                    },
                                    user_id: {
                                        type: "string",
                                        description: "The ID of the user who owns the device."
                                    },
                                    created_at: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The timestamp when the device was created."
                                    },
                                    events: {
                                        type: "array",
                                        description: "List of events associated with the device.",
                                        items: {
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The name of the event."
                                                },
                                                updated_at: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "The timestamp when the event was last updated."
                                                },
                                                value: {
                                                    type: "string",
                                                    description: "The value of the event."
                                                }
                                            }
                                        }
                                    },
                                    fqbn: {
                                        type: "string",
                                        description: "The fully qualified board name of the device."
                                    },
                                    last_activity_at: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The timestamp of the last activity related to the device."
                                    },
                                    ota_compatible: {
                                        type: "boolean",
                                        description: "Indicates if the device is OTA (Over-The-Air) compatible."
                                    },
                                    thing: {
                                        type: "object",
                                        description: "Information about the associated thing.",
                                        properties: {
                                            href: {
                                                type: "string",
                                                description: "The URL of the associated thing."
                                            },
                                            id: {
                                                type: "string",
                                                description: "The unique ID of the associated thing."
                                            },
                                            name: {
                                                type: "string",
                                                description: "The name of the associated thing."
                                            },
                                            timezone: {
                                                type: "string",
                                                description: "The timezone of the associated thing."
                                            },
                                            user_id: {
                                                type: "string",
                                                description: "The ID of the user who owns the associated thing."
                                            },
                                            created_at: {
                                                type: "string",
                                                format: "date-time",
                                                description: "The timestamp when the associated thing was created."
                                            },
                                            device_fqbn: {
                                                type: "string",
                                                description: "The fully qualified board name of the associated thing."
                                            },
                                            device_id: {
                                                type: "string",
                                                description: "The ID of the associated device."
                                            },
                                            device_name: {
                                                type: "string",
                                                description: "The name of the associated device."
                                            },
                                            device_type: {
                                                type: "string",
                                                description: "The type of the associated device."
                                            },
                                            properties_count: {
                                                type: "integer",
                                                description: "The count of properties associated with the associated thing."
                                            },
                                            sketch_id: {
                                                type: "string",
                                                description: "The ID of the sketch associated with the associated thing."
                                            },
                                            updated_at: {
                                                type: "string",
                                                format: "date-time",
                                                description: "The timestamp when the associated thing was last updated."
                                            },
                                            webhook_active: {
                                                type: "boolean",
                                                description: "Indicates if the webhook is active for the associated thing."
                                            }
                                        }
                                    },
                                    properties: {
                                        type: "array",
                                        description: "List of properties associated with the thing.",
                                        items: {
                                            type: "object",
                                            properties: {
                                                href: {
                                                    type: "string",
                                                    description: "The URL of the property."
                                                },
                                                id: {
                                                    type: "string",
                                                    description: "The unique ID of the property."
                                                },
                                                name: {
                                                    type: "string",
                                                    description: "The name of the property."
                                                },
                                                permission: {
                                                    type: "string",
                                                    description: "The permission level of the property."
                                                },
                                                thing_id: {
                                                    type: "string",
                                                    description: "The ID of the thing associated with the property."
                                                },
                                                type: {
                                                    type: "string",
                                                    description: "The data type of the property."
                                                },
                                                update_strategy: {
                                                    type: "string",
                                                    description: "The update strategy of the property."
                                                },
                                                created_at: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "The timestamp when the property was created."
                                                },
                                                last_value: {
                                                    type: "number",
                                                    description: "The last recorded value of the property."
                                                },
                                                persist: {
                                                    type: "boolean",
                                                    description: "Indicates if the property data should be persisted."
                                                },
                                                tag: {
                                                    type: "integer",
                                                    description: "A tag associated with the property."
                                                },
                                                update_parameter: {
                                                    type: "integer",
                                                    description: "The update parameter for the property."
                                                },
                                                updated_at: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "The timestamp when the property was last updated."
                                                },
                                                value_updated_at: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "The timestamp when the property value was last updated."
                                                },
                                                variable_name: {
                                                    type: "string",
                                                    description: "The variable name of the property."
                                                },
                                                current_value: {
                                                    type: "string",
                                                    description: "The current value of the property."
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        },
                    },
                },
            },
        },
        '/thingInformation':
        {
            get:
            {
                summary: 'Get information about a specific thing',
                description: 'Retrieve information about a thing by providing its device ID.',
                responses:
                {
                    '200':
                    {
                        description: 'Information about the specified thing.',
                        schema:
                        {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    href: {
                                        type: "string",
                                        description: "The URL of the thing."
                                    },
                                    id: {
                                        type: "string",
                                        description: "The unique ID of the thing."
                                    },
                                    name: {
                                        type: "string",
                                        description: "The name of the thing."
                                    },
                                    timezone: {
                                        type: "string",
                                        description: "The timezone of the thing."
                                    },
                                    user_id: {
                                        type: "string",
                                        description: "The ID of the user who owns the thing."
                                    },
                                    created_at: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The timestamp when the thing was created."
                                    },
                                    device_fqbn: {
                                        type: "string",
                                        description: "The fully qualified board name of the device."
                                    },
                                    device_id: {
                                        type: "string",
                                        description: "The ID of the associated device."
                                    },
                                    device_name: {
                                        type: "string",
                                        description: "The name of the associated device."
                                    },
                                    device_type: {
                                        type: "string",
                                        description: "The type of the associated device."
                                    },
                                    properties_count: {
                                        type: "integer",
                                        description: "The count of properties associated with the thing."
                                    },
                                    sketch_id: {
                                        type: "string",
                                        description: "The ID of the sketch associated with the thing."
                                    },
                                    updated_at: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The timestamp when the thing was last updated."
                                    },
                                    webhook_active: {
                                        type: "boolean",
                                        description: "Indicates if the webhook is active for the thing."
                                    }
                                }
                            }
                        },
                    },
                    '400':
                    {
                        description: 'Bad request. Missing or invalid parameters.',
                    },
                    '404':
                    {
                        description: 'Thing not found for the specified device.',
                    },
                    '500':
                    {
                        description: 'Internal Server Error.',
                    },
                },
            },
        },
        '/thingValue':
        {
            get:
            {
                summary: 'Get the current value of a specific thing',
                description: 'Retrieve the current value of a thing by providing its ID.',
                parameters:
                    [
                        {
                            name: 'thingid',
                            in: 'query',
                            description: 'The ID of the thing for which to get the current value.',
                            required: true,
                            type: 'string',
                        },
                    ],
                responses:
                {
                    '200':
                    {
                        description: 'The current value of the specified thing.',
                        schema:
                        {
                            type: 'object',
                            properties:
                            {
                                value:
                                {
                                    type: 'object',
                                    properties:
                                    {
                                        href: {
                                            type: "string",
                                            description: "The URL of the IoT thing."
                                        },
                                        id: {
                                            type: "string",
                                            description: "The unique ID of the IoT thing."
                                        },
                                        name: {
                                            type: "string",
                                            description: "The name of the IoT thing."
                                        },
                                        timezone: {
                                            type: "string",
                                            description: "The timezone of the IoT thing."
                                        },
                                        user_id: {
                                            type: "string",
                                            description: "The ID of the user who owns the IoT thing."
                                        },
                                        created_at: {
                                            type: "string",
                                            format: "date-time",
                                            description: "The timestamp when the IoT thing was created."
                                        },
                                        device_fqbn: {
                                            type: "string",
                                            description: "The fully qualified board name of the device."
                                        },
                                        device_id: {
                                            type: "string",
                                            description: "The ID of the associated device."
                                        },
                                        device_name: {
                                            type: "string",
                                            description: "The name of the associated device."
                                        },
                                        device_type: {
                                            type: "string",
                                            description: "The type of the associated device."
                                        },
                                        properties: {
                                            type: "array",
                                            description: "List of properties associated with the IoT thing.",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    href: {
                                                        type: "string",
                                                        description: "The URL of the property."
                                                    },
                                                    id: {
                                                        type: "string",
                                                        description: "The unique ID of the property."
                                                    },
                                                    name: {
                                                        type: "string",
                                                        description: "The name of the property."
                                                    },
                                                    permission: {
                                                        type: "string",
                                                        description: "The permission level of the property."
                                                    },
                                                    thing_id: {
                                                        type: "string",
                                                        description: "The ID of the thing associated with the property."
                                                    },
                                                    type: {
                                                        type: "string",
                                                        description: "The data type of the property."
                                                    },
                                                    update_strategy: {
                                                        type: "string",
                                                        description: "The update strategy of the property."
                                                    },
                                                    created_at: {
                                                        type: "string",
                                                        format: "date-time",
                                                        description: "The timestamp when the property was created."
                                                    },
                                                    last_value: {
                                                        type: "number",
                                                        description: "The last recorded value of the property."
                                                    },
                                                    persist: {
                                                        type: "boolean",
                                                        description: "Indicates if the property data should be persisted."
                                                    },
                                                    tag: {
                                                        type: "integer",
                                                        description: "A tag associated with the property."
                                                    },
                                                    update_parameter: {
                                                        type: "integer",
                                                        description: "The update parameter for the property."
                                                    },
                                                    updated_at: {
                                                        type: "string",
                                                        format: "date-time",
                                                        description: "The timestamp when the property was last updated."
                                                    },
                                                    value_updated_at: {
                                                        type: "string",
                                                        format: "date-time",
                                                        description: "The timestamp when the property value was last updated."
                                                    },
                                                    variable_name: {
                                                        type: "string",
                                                        description: "The variable name of the property."
                                                    }
                                                }
                                            }
                                        },
                                        properties_count: {
                                            type: "integer",
                                            description: "The count of properties associated with the IoT thing."
                                        },
                                        sketch_id: {
                                            type: "string",
                                            description: "The ID of the sketch associated with the IoT thing."
                                        },
                                        updated_at: {
                                            type: "string",
                                            format: "date-time",
                                            description: "The timestamp when the IoT thing was last updated."
                                        },
                                        webhook_active: {
                                            type: "boolean",
                                            description: "Indicates if the webhook is active for the IoT thing."
                                        }
                                    },
                                },
                            },
                        },
                        '400':
                        {
                            description: 'Bad request. Missing or invalid parameters.',
                        },
                        '500':
                        {
                            description: 'Internal Server Error.',
                        },
                    },
                },
            },
        }
    }
};

module.exports = swaggerSpec;
