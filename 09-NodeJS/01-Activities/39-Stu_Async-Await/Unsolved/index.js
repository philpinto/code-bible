const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {const { animals } = await inquirer.prompt({
    message: "Combine animals:",
    name: "Animal"
  });

  const { data } = await axios.get(
    `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
  );

  } catch(err) {
    console.log(err);

  }
}

combineAnimals();
