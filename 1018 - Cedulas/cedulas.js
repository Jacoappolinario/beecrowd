const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

const BANKNOTES_CONSIDERED = [100, 50, 20, 10, 5, 2, 1];

function calculateNotes(totalAmount, noteValue) {
  const numberOfNotes = parseInt(totalAmount / noteValue);
  const remainingAmount = totalAmount % noteValue;

  return { numberOfNotes, remainingAmount };
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8")).trim();

    if (!inputContent || isNaN(inputContent)) {
      throw new Error(`Erro: O arquivo de entrada não contém o dado esperado.`);
    }

    let totalAmount = parseInt(inputContent);

    console.log(totalAmount);

    BANKNOTES_CONSIDERED.forEach((noteValue) => {
      const { numberOfNotes, remainingAmount } = calculateNotes(
        totalAmount,
        noteValue
      );

      console.log(`${numberOfNotes} nota(s) de R$ ${noteValue},00`);

      totalAmount = remainingAmount;
    });
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
