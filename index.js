const { createFile, readFile, validatingYesOrNo } = require("./operaciones");
const { preguntas } = require("./preguntas");
require("colors");

//createFile("Wanda", "5 años", "Gata", "Blanca", "Vomito blanco");

//console.log(readFile());

console.clear();
console.log("Bienvenido a la veterinaria GuauGuau.".red);

const app = () => {
  console.log("Ola k ase");
};

app();

/*
process.stdin.on("data", (data) => {
  console.log("data", data.toString().trim());
  process.exit();
});

*/
