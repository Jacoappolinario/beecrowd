const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

async function processInputFile(INPUT_FILE) {
  const inputContent = (await readFile(INPUT_FILE, "utf-8"))
    .trim()
    .split(" ")
    .flatMap((value) => parseInt(value) || []);

  if (inputContent.length !== 3) {
    throw new Error(
      `Erro: O arquivo de entrada não contém os dados esperados.`
    );
  }

  [A, B, C] = inputContent;

  return { A, B, C };
}

function largerNumber(valueOne, valueTwo) {
  return (valueOne + valueTwo + Math.abs(valueOne - valueTwo)) / 2;
}

async function main() {
  try {
    const { A, B, C } = await processInputFile(INPUT_FILE);

    let largerResult = largerNumber(A, B);
    largerResult = largerNumber(largerResult, C);

    console.log(`${largerResult} eh o maior`);
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
