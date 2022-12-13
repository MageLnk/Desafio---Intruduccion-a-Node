const { createFile, readFile } = require("./operaciones");

const autos = [
  {
    marca: "Susuki",
    modelo: "Kicks",
  },
  {
    marca: "Toyota",
    modelo: "Corola",
  },
  {
    marca: "GAC",
    modelo: "GS4",
  },
  {
    marga: "Hyundai",
    modelo: "i30",
  },
  {
    marga: "Aston Martin",
    modelo: "One-77",
  },
];

createFile("autos2", autos);

console.log(readFile("./autos2"));
