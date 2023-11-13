const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

async function main() {
  try {
    const inputContent = await readFile(INPUT_FILE, "utf-8");
    const [A, B] = inputContent.split("\n").map((value) => parseInt(value));

    if (isNaN(A) || isNaN(B)) {
      throw new Error(
        "Erro: Valores de entrada inválidos. Certifique-se de que os valores de A e B sejam números inteiros."
      );
    }

    const X = A + B;

    console.log(`X = ${X}`);
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
