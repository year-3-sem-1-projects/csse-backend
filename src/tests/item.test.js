import jest from "jest"
import request from "supertest"
const baseUrl = "http://localhost:3000";
let itemData = {}

describe(`delivery`, () => {
    const newitem = {
        item_name: "Cement", 
        item_description: "Good cement",
        item_category: "cement",
        item_unit_price: 2500
    }

    beforeAll(async () => {
        deliveryData = await request(baseUrl)
        .post("/api/item/add")
        .send(newitem);
    });
    
    afterAll(async () => {
        await request(baseUrl)
        .delete(`/api/item/delete/${itemData.body.data._id}`)
    });

    it(`should create a new item`, async () => {
        const res = await request(baseUrl)
        .get(`/api/item/get/${itemData.body.data._id}`)
        expect(res.body.data).not.toBe(null)
    });
});

