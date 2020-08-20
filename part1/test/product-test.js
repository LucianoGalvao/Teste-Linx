const chai = require("chai");
const server = require("../src/server.js");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const MockDate = require("mockdate");

chai.use(chaiHttp);

describe("/api/v1/products", () => {
  it("Deve retornar status 200", (done) => {
    chai
      .request(server)
      .post("/api/v1/products")
      .send({ id: 123, model: "mesa" })
      .end((_err, res) => {
        assert.equal(
          res.statusCode,
          200,
          "Retorno de status code deve ser 200"
        );

        done();
      });
  });

  it("Retornar status 403 caso a requisição seja repetida em menos de 10 minutos", (done) => {
    chai
      .request(server)
      .post("/api/v1/products")
      .send({ id: 123, model: "mesa" })
      .end((_err, res) => {
        assert.equal(
          res.statusCode,
          403,
          "Retorno de status code deve ser 403"
        );

        done();
      });
  });

  describe("Acrescentando 10 minutos na requisição", () => {
    beforeEach(() => {
      const dateToBeMocked = new Date();
      dateToBeMocked.setMinutes(dateToBeMocked.getMinutes() + 11);

      MockDate.set(dateToBeMocked.toString());
    });

    it("Retornar status code 200 após 10 minutos", (done) => {
      chai
        .request(server)
        .post("/api/v1/products")
        .send({ id: 123, model: "mesa" })
        .end((_err, res) => {
          assert.equal(
            res.statusCode,
            200,
            "Retorno de status code deve ser 200"
          );

          done();
        });
    });
  });
});
