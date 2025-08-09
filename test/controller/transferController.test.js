const request = require("supertest");
const sinon = require("sinon");
const { expect } = require("chai");

const app = require("../../app");

describe("Transfer Controller", () => {
  describe("POST /transfers", () => {
    it("Quando informo remetente e destinário inexistentes recebo 404", async () => {
      const resposta = await request(app).post("/transfers").send({
        from: "igor",
        to: "julio",
        amount: 100,
      });
      expect(resposta.status).to.equal(404);
      expect(resposta.body).to.have.property(
        "message",
        "Sender or recipient not found."
      );
    });
  });

  describe("GET /transfers", () => {});
});
