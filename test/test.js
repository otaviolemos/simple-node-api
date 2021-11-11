const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
   it("responds with Hello World!", (done) => {
      request(app).get("/").expect("Hello World from Docker and GitHub Actions!", done);
   })
});