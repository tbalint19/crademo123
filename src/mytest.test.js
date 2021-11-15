import { withUpdatedFruit } from './Producers/withUpdatedFruit'

it("should return empty list when input is an empty list", () => {
    const resultList1 = withUpdatedFruit([  ], 1, "körte")
    expect(resultList1.length).toBe(0);
})

it("should", () => {
    const data = [ { name: "alma", id: 1 } ]
    const result = withUpdatedFruit(data, 1, "körte")

    const expected = [ { name: "körte", id: 1 } ]
    
    expect( result ).toStrictEqual( expected )
})

