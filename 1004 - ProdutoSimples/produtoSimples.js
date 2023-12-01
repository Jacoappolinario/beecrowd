const { readFile } = require("fs").promises;

const INPUT_FILES = process.argv[2] || "/dev/stdin";

async function main() {
  try {
    const [A, B] = (await readFile(INPUT_FILES, "utf-8"))
      .trim()
      .split("\n")
      .map((value) => parseInt(value));

    if (isNaN(A) || isNaN(B)) {
      throw new Error(
        "Erro: Valor de entrada inválido. Por favor verifique os valores atribuídos a A e B."
      );
    }

    const product = A * B;

    console.log(`PROD = ${product}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Erro: O arquivo ${INPUT_FILES} não pode ser encontrado.`);
    } else {
      console.error(
        `Erro ao processar o arquivo ${INPUT_FILES}: ${error.message}`
      );
    }
  }
}

main();
