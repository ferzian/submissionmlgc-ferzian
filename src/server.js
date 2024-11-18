require('dotenv').config();

const Hapi = require('@hapi/hapi');
const { routes } = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST,
        routes: {
            cors: true,
            payload: {
                maxBytes: process.env.MAX_PAYLOAD_SIZE,
            },
        },
    })

    routes(server);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
