import jest from "jest"
import request from "supertest"
const baseUrl = "http://localhost:5432";
let deliveryData = {}

describe(`delivery`, () => {
    const newDelivery = {
        delivery_status: "pending"
    }

    beforeAll(async () => {
        deliveryData = await request(baseUrl)
        .post("/api/delivery/add")
        .send(newDelivery);
    });
    
    afterAll(async () => {
        await request(baseUrl)
        .delete(`/api/delivery/delete/${deliveryData.body._id}`)
    });

    it(`should create a new delivery`, async () => {
        const res = await request(baseUrl)
        .get(`/api/delivery/get/${deliveryData.body._id}`)
        expect(res.body.data).not.toBe(null)
    });
});

