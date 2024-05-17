const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin"; // Constante representando o caminho do arquivo de entrada. Se nenhum caminho for fornecido como argumento na linha de comando, "/dev/stdin" será utilizado.

const KM_PER_LITER = 12; // Constante representando a quantidade média de quilômetros percorridos por litro de combustível.

function calculateFuelQuantity(travelTime, averageSpeed) {
  return ((travelTime * averageSpeed) / KM_PER_LITER).toFixed(3);
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split("\n")
      .flatMap((value) => parseInt(value) || []);

    if (inputContent.length !== 2) {
      throw new Error(
        `Erro: O arquivo de entrada não contém os dados esperados.`
      );
    }

    [travelTime, averageSpeed] = inputContent;

    const fuelQuantity = calculateFuelQuantity(travelTime, averageSpeed);

    console.log(fuelQuantity);
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
