'use strict'

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
}

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Will be delivered to ${address} at ${time}`
        )
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {},
}

let [category1, category2] = restaurant.categories
// console.log(category1, category2);

;[category1, category2] = [category2, category1]
// console.log(category1, category2);

let [cat1, , cat2] = restaurant.categories
// console.log(cat1, cat2);

const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]]
const [i, , j] = nested
const [a, , [b, c1]] = nested
// console.log(i, j);
// console.log(a, b, c);

const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r);

// use the exact property names
//const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories);

// Renaming
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant
// console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters);

//  variables
let mutate1 = 1
let mutate2 = 2
const obj = { mutate1: 10, mutate2: 11, mutate3: 12 }

;({ mutate1, mutate2 } = obj)

// console.log(mutate1, mutate2);

// Nested objects
const {
    fri: { open: o, close: c },
} = hours
// console.log(o, c);

// destructuring objects as function parameters
const delivery1 = {
    starterIndex: 2,
    mainIndex: 2,
    time: '22:30',
    address: 'Via del Sole, 21',
}
const delivery2 = {
    starterIndex: 3,
    address: 'Via del Sole, 21',
}
restaurant.orderDelivery(delivery1)
restaurant.orderDelivery(delivery2)

// Spread operator
const arrToSpread = [7, 8, 9]
const spreadArr = [1, 2, ...arrToSpread]
// console.log(spreadArr)
// console.log(...spreadArr)

const newMenu = [...restaurant.mainMenu, 'Gnocchi']
//console.log(...newMenu)

// copy array
const mainMenuCopy = [...newMenu]

// join arrays
const wholeMenu = [...newMenu, ...restaurant.starterMenu]
console.log(wholeMenu)

// the spread operator works on all iteratbles: strings, maps, sets, arrays
const nameToLetters = 'Tyna'

//we can use the spread operator only when we create an array or pass arguments to a function
const letters = [...nameToLetters, ' ', 'B']
//console.log(letters)

//someFunction(...arr);

//Rest operator vs Spread operator: Rest - left part of the statement, Spread - right part
const [rest1, rest2, ...others] = [1, 2, 3, 4, 5]
//console.log(rest1, rest2, ...others)

const [...wholeMenu2] = [...restaurant.mainMenu, ...restaurant.starterMenu]
//console.log(...wholeMenu2);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
]
//console.log(pizza, risotto, ...otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours
//console.log(sat, weekdays);

//functions - rest parameters
const add = function (...numbers) {
    const sum = numbers.reduce((total, initialValue) => total + initialValue)
    return sum
}
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));

const addArr = [5, 5, 1]
// console.log(add(...addArr));

//Nullish values: null, undefined. ?? operator works like || but with nullish values

//logical assignment operators

const restau1 = {
    name: 'Capri',
    numGuests: 20,
}

const restau2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
}

restau1.numGuests ??= 10
restau2.numGuests ??= 10

for (const item of wholeMenu) console.log(item)

for (const [i, el] of wholeMenu.entries()) {
    // .entries() returns the array of the inital array items + their identifier (position in the initial array)
    console.log(`${i + 1}: ${el}`)
}

const entriesHours = Object.entries(openingHours)

for (const [day, { open, close }] of entriesHours) {
    console.log(`On ${day} we open at ${open} and close at ${close}`)
}

// SETS - store only unique values w/o indexes; it is not possible to get values from sets
const orderSet = new Set(['Pasta', 'Pasta', 'Pizza', 'Risotto', 'Pizza'])
console.log(orderSet.has('Pizza'))
orderSet.add('Garlic Bread')
orderSet.add('Garlic Bread')
console.log(orderSet.size)
orderSet.delete('Risotto')

for (const order of orderSet) console.log(order)

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set (staff)];
console.log(staffUnique);

//how many unique positions are there, w/o creating an array:
console.log(new Set(staff).size);

//sets are not intended to replace arrays
