const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MINUTE = 60;

function convertDurationTime(durationInSeconds) {
  const hours = parseInt(durationInSeconds / SECONDS_PER_HOUR);
  const minutes = parseInt(
    (durationInSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE
  );
  const seconds = parseInt(durationInSeconds % SECONDS_PER_MINUTE);

  return `${hours}:${minutes}:${seconds}`;
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8")).trim();
    const durationInSeconds = parseInt(inputContent);

    if (!durationInSeconds) {
      throw new Error(`Erro: O arquivo de entrada não contém o dado esperado.`);
    }

    const convertedDuration = convertDurationTime(durationInSeconds);

    console.log(convertedDuration);
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
