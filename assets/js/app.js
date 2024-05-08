// let arr = ["salom", "hayr", "davronbek", 5];

// let res = arr.every((e) => typeof e === "string");

// console.log(res);

// let obj = {
//   names: "bexruz",
//   surname: "shakarboyev",
//   age: 14,
// };

// let { age, surname, names } = obj;

// console.log(names, surname, age);

// console.log(obj.names);
// console.log(obj.age);
// console.log(obj.surname);

// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8, 9, 0];

// // let res1 = num1.concat(num2);

// let res2 = [...num1, ...num2];

// console.log(res2);

// let obj = {
//   names: "bexruz",
//   surname: "shakarboyev",
//   age: 14,
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

const input = document.querySelector(".input");
// const btnEl = document.querySelector(".btn");
const array = [];
input.addEventListener("input", () => {
    // e.preventDefault();
    localStorage.setItem("behtruz", JSON.stringify(array));
    document.getElementById("text").innerHTML = localStorage.getItem("behruz");

    let arr = [];

    arr.push(input.value);
    console.log(arr);
});

// let arr = [1, 2, 3, 4, 5, 5, 6, 6, 6, 6];

// document.body.innerHTML = `${}`;
// pEl.innerHTML = input.value
