const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

function areValuesAccepted(A, B, C, D) {
  return B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0
    ? "Valores aceitos"
    : "Valores nao aceitos";
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split(" ")
      .flatMap((value) => parseInt(value) || []);

    if (inputContent.length !== 4) {
      throw new Error(
        `Erro: O arquivo de entrada não contém os dados esperados.`
      );
    }

    const result = areValuesAccepted(...inputContent);

    console.log(result);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Erro: O arquivo ${INPUT_FILE} não pode ser encontrado.`);
    } else
      [
        console.error(
          `Erro ao processar o arquivo ${INPUT_FILE}: ${error.message}`
        ),
      ];
  }
}

main();
