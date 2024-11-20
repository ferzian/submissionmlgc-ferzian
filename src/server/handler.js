const predictClassification = require('../services/inferenceService');
const crypto = require('crypto');
const storeData = require('../services/storeData');
const getAllData = require("../services/loadData");


async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  const { confidenceScore, label, explanation, suggestion } = await predictClassification(model, image);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const data = {
    "id": id,
    "result": label,
    "suggestion": suggestion,
    "createdAt": createdAt
  }

  await storeData(id, data);

  const response = h.response({
    status: 'success',
    message: 'Model is predicted successfully',
    data
  })
  response.code(201);
  return response;
}

async function getAllDataHandler(request, h) {
  try {
    const allData = await getAllData();
    const response = h.response({
      status: "success",
      data: allData,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return h
      .response({
        status: "failed",
        message: "An unexpected error occurred",
      })
      .code(500);
  }
}

module.exports = { postPredictHandler, getAllDataHandler }; 