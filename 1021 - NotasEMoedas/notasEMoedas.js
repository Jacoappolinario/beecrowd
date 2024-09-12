const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

const BANKNOTES_CONSIDERED = [100, 50, 20, 10, 5, 2];
const COINS_CONSIDERED = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

function calculateDenominations(totalAmount, denominationsValue) {
  const quantity = Math.floor(totalAmount / denominationsValue);
  const remainingAmount = (totalAmount % denominationsValue).toFixed(2);

  return { quantity, remainingAmount: parseFloat(remainingAmount) };
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8")).trim();
    let totalAmount = parseFloat(inputContent);

    if (isNaN(totalAmount)) {
      throw new Error(`Erro: O arquivo de entrada não contém o dado esperado.`);
    }

    console.log("NOTAS:");
    BANKNOTES_CONSIDERED.forEach((noteValue) => {
      const { quantity: numberOfNotes, remainingAmount } =
        calculateDenominations(totalAmount, noteValue);

      console.log(`${numberOfNotes} nota(s) de R$ ${noteValue.toFixed(2)}`);

      totalAmount = remainingAmount;
    });

    console.log("MOEDAS:");
    COINS_CONSIDERED.forEach((coinValue) => {
      const { quantity: numberOfCoins, remainingAmount } =
        calculateDenominations(totalAmount, coinValue);

      console.log(`${numberOfCoins} moeda(s) de R$ ${coinValue.toFixed(2)}`);

      totalAmount = remainingAmount;
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Erro: O arquivo ${INPUT_FILE} não pode ser encontrado.`);
    } else {
      console.error(
        `Erro ao processar o arquivo ${INPUT_FILE}: ${error.message}`
      );
    }
  }
}

main();
