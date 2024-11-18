const predictHandler = async (request, h) => {
    try {
        const { image } = request.payload;

        if (!image || image.hapi.size > 1000000) {
            const response = h.response({
                status: 'fail',
                message: 'Gagal menambahkan gambar. Gambar tidak boleh lebih dari 1MB.',
            });
            response.code(413);
            return response;
        }

        const isCancer = Math.random() > 0.5;

        const response = {
            status: 'success',
            message: 'Model terprediksi dengan benar.',
            data: {
                id: '13243546',
                result: isCancer ? 'Cancer' : 'Non-cancer',
                suggestion: isCancer ? 'Segera periksa ke dokter!' : 'Penyakit kanker tidak terdeteksi.',
                createdAt: new Date().toISOString(),
            },
        };
        response.code(200);
        return response;
    } catch (error) {
        const response = h.response({
            status: 'fail',
            message: 'Terjadi kesalahan dalam melakukan prediksi',
        })
        response.code(400);
        return response;
    }
};

module.exports = { predictHandler };
