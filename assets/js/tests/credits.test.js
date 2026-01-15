const exchange = require("../script");
describe("money system", () =>{
    test("should return credits after buying something which should be the orignal credits minus the price", () => {
        expect(exchange(20,6)).toBe(14);
    })
    test("should return the same number of credits that it was inputed because there was not enough credits to buy something", () =>{
        expect(exchange(20,22)).toBe(20);
    })
});