/*const name = "Dilsin"
const age = 93
const male = true
const x = null; */

/* Object below - ALWAYS ADD COMMAS*/

const hobbies = ["Cooking", "Video Games", "Music"]
const dilsin = {
    name: "Dilsin",
    age: 72,
    male: true,
    hobbies: ["Cooking", "Video Games", "Music"],
    hometown: {
        city: "Toronto",
        province: "Ontario"
    }
}

/*To access values: variable.object/dilsin.name */

console.log(dilsin.name);
console.log(dilsin.age)
console.log(dilsin.hobbies[0]);
for(let i = 0; i < dilsin.hobbies.length; i++) {
    console.log(dilsin.hobbies[i]);
}
/* To access an object inside an object: variable.object.objectTwo/dilsin.hometown.city */

console.log(dilsin.hometown.city)