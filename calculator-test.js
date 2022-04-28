describe("Calculating the Monthly Rate", () => {
  it("should calculate the monthly rate correctly-first", function () {
    let values = { amount: 90000, years: 30, rate: 2.5 };

    expect(calculateMonthlyPayment(values)).toEqual(`355.61`);
  });
});

describe("Test Decimal Places", () => {
  it("should return a result with 2 decimal places", function () {
    let values = { amount: 250000, years: 15, rate: 5.3 };

    expect(calculateMonthlyPayment(values)).toEqual("2016.27");
  });
});
/// etc
