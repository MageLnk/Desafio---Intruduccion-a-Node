const fs = require("fs");

const tareas = `
 1. Ir al gimnasio
 2. Buscar al niño al colegio
 3. Pagar los gastos comunes
`;

fs.writeFileSync("tareas.txt", tareas);

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
];

fs.writeFileSync("autos.json", JSON.stringify(autos));

//const content = fs.readFileSync("./autos.json", "utf8");
const objContent = JSON.parse(fs.readFileSync("./autos.json", "utf8"));

console.log(objContent);
