const exchange = require("../script");
describe("money system", () =>{
    test("should return credits after buying something which should be the orignal credits minus the price", () => {
        expect(exchange(20,6)).toBe(14);
    })
} )