const express = require('express');
const consign = require('consign');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config();

const app = express();

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Keep Control Api',
        version: '1.0.0',
        description: 'This is a project to find lost machine around the company',
        contact: {
          name: 'Back-End Upx5',
          url: 'https://github.com/TalisonMoura/backend-upx',
        },
      },
      components: {
        securitySchemes: {
          Bearer: {
            name: "Bearer",
            scheme: "bearer",
            description: 'JWT Authorization header using the Bearer scheme',
            in: "header",
            type: "http",
          },
        },
      },
      security: [
        {
          Bearer: [],
        },
      ],
    },
    apis: ['./src/traits/Swagger.js'],
  };

const specs = swaggerJsdoc(options);

app.use('/api-docs', (req, res, next) => {
    req.swaggerDoc = specs;
    next();
  }, swaggerUi.serve);
  
app.get('/api-docs', swaggerUi.setup(specs, { explorer: true, swaggerOptions: { persistAuthorization: true } }));

app.use(express.json());
app.use(cors());

consign()
  .include('src/routes')
  .then('src/repositories')
  .then('src/controllers')
  .into(app);

console.clear();

app.listen(3003, function() {
  console.log('APP rodando na porta 3003');
});
