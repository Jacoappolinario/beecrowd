const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

function calculateAverageConsumption(distance, totalFuelSpent) {
  return (distance / totalFuelSpent).toFixed(3);
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split("\n")
      .flatMap((value) => Number(value) || []);

    if (inputContent.length !== 2) {
      throw new Error(
        `Erro: O arquivo de entrada não contém os dados esperados.`
      );
    }

    const [distance, totalFuelSpent] = inputContent;

    const averageConsumption = calculateAverageConsumption(
      distance,
      totalFuelSpent
    );

    console.log(`${averageConsumption} km/l`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Erro: O arquivo ${INPUT_FILE} não pôde ser encontrado.`);
    } else {
      console.error(
        `Erro ao processar o arquivo ${INPUT_FILE}: ${error.message}`
      );
    }
  }
}

main();
