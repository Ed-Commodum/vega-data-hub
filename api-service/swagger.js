const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "REST API docs"
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    apis: [
        './routes.js'
    ]
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app, port) => {

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get('decs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
}

module.exports = { swaggerDocs };