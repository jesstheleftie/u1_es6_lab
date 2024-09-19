//Part 1 - Spreading Out

const fruits = ['apple', 'orange', 'kiwi', 'lime', 'watermelon']
const vegetables = ['kale', 'cucumber', 'melon', 'corn', 'carrot']

const produce = [...fruits,...vegetables]

console.log(produce)

const beef = ['Steak', 'Ground Beef', 'Beef Ribs', 'Beef Brisket'];
const seafood = ['Salmon', 'Shrimp', 'Crab', 'Lobster'];
const poultry = ['Chicken Breast', 'Turkey', 'Duck', 'Chicken Wings'];

const meat = [...beef,...seafood,...poultry]
console.log(meat)

const foods = [...produce,...meat]
console.log(foods)

//Part 2 - Merging Objects



const faveFoods = {
    taco: 'Mexico',
    curry: 'Thai',
    ramen: 'Japan'
}

const teamFaveFoods = {
    sushi: 'Japan',
    lasagna: 'Italian',
    pizza: 'Italian'
}

const allFoods = {...faveFoods, ...teamFaveFoods}

console.log(allFoods)

//Part 3 - Destructuring

const person = {
    name:'Jessica',
    age: 31,
    hometown:'Vancouver'
}

const {name, age, hometown} = person

console.log(name)
console.log(age)
console.log(hometown)

let petAge = 2
let petBreed = 'poodle'
let petName = 'Hercules'

const updatedPerson = {
    ...person, pet: {
        age: petAge,
        breed: petBreed,
        name: petName
    }
}
console.log(updatedPerson.pet.name)

