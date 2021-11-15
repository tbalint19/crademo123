const withUpdatedFruit = require('./Producers/withUpdatedFruit')


const testit = (description, assertion) => {
    if (assertion === true) {
        console.log("Success - " + description)
    } else {
        console.log("Error" + description)
    }
}

const resultList1 = withUpdatedFruit([  ], 1, "körte")
const expectedList1 = []
testit("empty list as input should return empty list", resultList1.length == expectedList1.length)

const resultList2 = withUpdatedFruit([ { name: "alma", id: 1, color: "red" } ], 1, "körte")
const expectedList2 = [ { name: "körte", id: 1, color: "red" } ]
testit("one elem should be updated if matches id", resultList2.length === 1 && resultList2[0].name === expectedList2[0].name)

const resultList3 = withUpdatedFruit([ { name: "alma", id: 1, color: "red" } ], 2, "körte")
const expectedList3 = [ { name: "alma", id: 1, color: "red" } ]
testit("one elem should be NOT updated if does NOT match id", resultList3.length === 1 && resultList3[0].name === expectedList3[0].name)
