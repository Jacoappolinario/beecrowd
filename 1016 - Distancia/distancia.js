const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

const KM_PER_TWO_MINUTES = 120; // Constante representando quilômetros a cada dois minutos.
const MINUTES_PER_HOUR = 60; // Constante representando o número de minutos em uma hora.

function calculateTimeToDistance(km) {
  return (KM_PER_TWO_MINUTES * km) / MINUTES_PER_HOUR;
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8")).trim();
    const km = parseInt(inputContent);

    if (!km) {
      throw new Error(`Erro: O arquivo de entrada não contém o dado esperado.`);
    }

    const time = calculateTimeToDistance(km);

    console.log(`${time} minutos`);
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
