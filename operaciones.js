const fs = require("fs");

const deployMenu = () => {
  return new Promise((resolve) => {
    console.log("===========================================".green);
    console.log(`          Seleccione una opción.`.red);
    console.log("===========================================".green);

    console.log(`${"1.".yellow} Ingresar una mascota`);
    console.log(`${"2.".yellow} Revisar todas las mascotas ingresadas`);
    console.log(`${"0.".red} Salir`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opción: ", (answer) => {
      readline.close();
      resolve(answer);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\n Presione ${"Enter".green} para continuar\n`, () => {
      readline.close();
      resolve();
    });
  });
};

const insertData = (ask) => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`${ask}`, (answer) => {
      readline.close();
      resolve(answer);
    });
  });
};

const createFile = async () => {
  let actualDB = readFile();
  const newObject = {
    nombre: await insertData("Ingrese el nombre de la mascota\n"),
    edad: await insertData("Ingrese la edad de la mascota\n"),
    animal: await insertData("Ingrese el tipo de mascota\n"),
    color: await insertData("Ingrese el color de la mascota\n"),
    enfermedad: await insertData("Ingrese los síntomas de la mascota\n"),
  };
  actualDB.push(newObject);
  fs.writeFileSync(`citas.json`, JSON.stringify(actualDB));
};

const readFile = () => JSON.parse(fs.readFileSync(`citas.json`, "utf8"));

module.exports = { deployMenu, pause, createFile, readFile };
