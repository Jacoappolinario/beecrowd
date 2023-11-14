const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";
const N = 3.14159;

async function main() {
  try {
    const inputContent = await readFile(INPUT_FILE, "utf-8");
    const radius = parseFloat(inputContent);

    if (isNaN(radius) || radius < 0) {
      throw new Error(
        "Erro: Valor de entrada inválido. Por favor, verifique se o valor atribuído ao raio é numérico, maior que zero e do tipo ponto flutuante."
      );
    }

    const area = N * Math.pow(radius, 2);

    console.log(`A=${area.toFixed(4)}`);
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
