import jest from "jest"
import request from "supertest"
const baseUrl = "http://localhost:5432";
let employeeData = {}

describe(`employee`, () => {
    const newEmployee = {
        first_name: "testFname",
        last_name: "testLastname",
        email: "test@gmail.com",
        role: "testRole",
        company_id: "testId"
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

