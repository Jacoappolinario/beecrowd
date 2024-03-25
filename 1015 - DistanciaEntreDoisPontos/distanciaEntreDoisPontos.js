const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

function calculateDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(4);
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split("\n")
      .flatMap((value) => value.split(" "))
      .flatMap((value) => Number(value) || []);

    if (inputContent.length !== 4) {
      throw new Error(
        `Erro: O arquivo de entrada não contém os dados esperados.`
      );
    }

    [x1, y1, x2, y2] = inputContent;

    const distance = calculateDistanceBetweenPoints(x1, y1, x2, y2);

    console.log(distance);
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
