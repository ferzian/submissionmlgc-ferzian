const { handlePredict } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/predict',
        options: {
            payload: {
                output: 'data',
                parse: true,
                allow: 'multipart/form-data',
                maxBytes: 1000000, // Maksimal 1MB
            },
        },
        handler: handlePredict,
    },
];

module.exports = routes;
