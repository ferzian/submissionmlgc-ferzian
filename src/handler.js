const { nanoid } = require('nanoid');
// const fs = require('fs');

const handlePredict = async (request, h) => {
    try {
        const { payload } = request;
        const image = payload.image;

        // Validasi jika file tidak ada
        if (!image || !image._data) {
            return h.response({
                status: 'fail',
                message: 'Terjadi kesalahan dalam melakukan prediksi',
            }).code(400);
        }

        // Validasi ukuran file
        const MAX_SIZE = 1000000; // 1MB
        if (image._data.length > MAX_SIZE) {
            return h.response({
                status: 'fail',
                message: 'Payload content length greater than maximum allowed: 1000000',
            }).code(413);
        }

        // Simulasi hasil prediksi
        const isCancer = Math.random() > 0.5; // Dummy logic
        const result = isCancer ? 'Cancer' : 'Non-cancer';
        const suggestion = isCancer 
            ? 'Segera periksa ke dokter!' 
            : 'Penyakit kanker tidak terdeteksi.';

        return h.response({
            status: 'success',
            message: 'Model is predicted successfully',
            data: {
                id: nanoid(),
                result,
                suggestion,
                createdAt: new Date().toISOString(),
            },
        }).code(200);

    } catch (error) {
        console.error(error);
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan dalam melakukan prediksi',
        }).code(400);
    }
};

module.exports = { handlePredict };
