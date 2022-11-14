import jest from "jest"
import request from "supertest"
const baseUrl = "http://localhost:3000";
let employeeData = {}

describe(`employee`, () => {
    const newEmployee = {
        delivery_status: "pending"
    }

    beforeAll(async () => {
        employeeData = await request(baseUrl)
        .post("/api/employee/add")
        .send(newEmployee);
    });
    
    afterAll(async () => {
        await request(baseUrl)
        .delete(`/api/employee/delete/${employeeData.body.data._id}`)
    });

    it(`should create a new employee`, async () => {
        const res = await request(baseUrl)
        .get(`/api/employee/get/${employeeData.body.data._id}`)
        expect(res.body.data).not.toBe(null)
    });
});

