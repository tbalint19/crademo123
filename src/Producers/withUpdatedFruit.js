const withUpdatedFruit = (fruits, id, newName) => fruits.map(fruit => fruit.id === id ? { ...fruit, name: newName } : fruit)

module.exports = withUpdatedFruit
