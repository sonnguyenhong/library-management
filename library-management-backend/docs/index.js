const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "HUST Library API",
            version: "1.0.0",
            description: "A Library Management API for HUST"
        },
        servers: [
            {
                url: "http://localhost:8000/api/v1"
            }
        ],
    },
    apis: ["./src/routes/*"]
}

const specs = swaggerJSDoc(options);

module.exports = specs;