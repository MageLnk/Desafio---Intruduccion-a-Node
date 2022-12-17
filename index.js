require("colors");
const { deployMenu, pause, createFile, readFile } = require("./operaciones");

console.clear();
console.log("===========================================".green);
console.log("   Bienvenido a la veterinaria GuauGuau.".red);
console.log("===========================================\n".green);

const app = async () => {
  let optionSelected = "";
  do {
    optionSelected = await deployMenu();
    if (optionSelected === "1") {
      await createFile();
      console.log("¡Mascota ingresada con éxito!".red);
    }
    if (optionSelected === "2") console.log(readFile());
    if (optionSelected !== "0") await pause();
  } while (optionSelected !== "0");
};

app();
