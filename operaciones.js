const fs = require("fs");
const createFile = (nameFile, contentFile) => {
  fs.writeFileSync(`${nameFile}.json`, JSON.stringify(contentFile));
};

const readFile = (nameFile) => JSON.parse(fs.readFileSync(`${nameFile}.json`, "utf8"));

module.exports = { createFile, readFile };
