const { predictHandler } = require('./handler');

const routes = (server) => {
    server.route({
        method: 'POST',
        path: '/predict',
        options: {
            payload: {
                output: 'file',
                allow: 'multipart/form-data',
                parse: true,
                multipart: true,
                maxBytes: 1000000,
            },
        },
        handler: predictHandler,
    });
};

module.exports = { routes };
