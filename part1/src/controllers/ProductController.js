const { addMinutes, isAfter } = require("date-fns");

const requests = [];

module.exports = {
  async create(request, response) {
    const { id, model } = request.body;

    if (requests.length > 0) {
      requests.forEach((request) => {
        const more10Minutes = addMinutes(request["datetime"], 10);

        if (
          request["id"] == id &&
          request["model"] == model &&
          isAfter(more10Minutes, new Date())
        ) {
          response.status(403);
          return response.json({
            error:
              "Requisição com os mesmo parâmetros já passada dentro de 10 minutos.",
          });
        }
      });
    }

    requests.push({
      id: id,
      model: model,
      datetime: new Date(),
    });

    response.status(200);
    return response.json();
  },
};
