const request = require("supertest");
const app = require("../App");

describe("GET /cars", () => {
    it("should return all cars", async () => {
        const response = await request(app).get("/cars");
    
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200)
    });
  });

  describe("GET /cars/:id", () => {
    it("should return one cars", async () => {
        const response = await request(app).get("/cars/1");
    
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200)
    });
  });

  describe("GET /cars/:id", () => {
    it("should return one cars", async () => {
        const response = await request(app).get("/cars/0");
    
        expect(response.status).toEqual(404)
    });
  });