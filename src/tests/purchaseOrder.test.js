import jest from "jest"
import request from "supertest"
const baseUrl = "http://localhost:5432";
let purchaseData = {}

describe(`purchaseorder`, () => {
    const newPurchase = {
        delivery_status: "pending"
    }

    beforeAll(async () => {
        purchaseData = await request(baseUrl)
        .post("/api/purchase-order/add")
        .send(newPurchase);
    });
    
    afterAll(async () => {
        await request(baseUrl)
        .delete(`/api/purchase-order/delete/${purchaseData.body.data._id}`)
    });

    it(`should create a new purchase-order`, async () => {
        const res = await request(baseUrl)
        .get(`/api/purchase-order/get/${purchaseData.body.data._id}`)
        expect(res.body.data).not.toBe(null)
    });
});

