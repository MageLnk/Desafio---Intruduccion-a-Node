const fs = require("fs");

const createFile = (name, age, animal, color, disease) => {
  let actualDB = readFile();
  const newObject = {
    nombre: name,
    edad: age,
    animal: animal,
    color: color,
    enfermedad: disease,
  };
  actualDB.push(newObject);
  fs.writeFileSync(`citas.json`, JSON.stringify(actualDB));
};

const readFile = () => JSON.parse(fs.readFileSync(`citas.json`, "utf8"));

module.exports = { createFile, readFile };
