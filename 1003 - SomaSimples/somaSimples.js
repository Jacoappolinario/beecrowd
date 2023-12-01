const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

async function main() {
  try {
    const [A, B] = (await readFile(INPUT_FILE, "utf-8"))
      .split("\n")
      .map((value) => parseInt(value));

    if (isNaN(A) || isNaN(B)) {
      throw new Error(
        "Erro: Valor de entrada inválido. Por favor verifique os valores atribuídos a A e B."
      );
    }

    const sum = A + B;

    console.log(`SOMA = ${sum}`);
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
