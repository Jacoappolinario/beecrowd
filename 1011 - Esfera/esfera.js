const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";
const PI = 3.14159;

function calculateSphereVolume(radius) {
  return (4 / 3) * PI * radius ** 3;
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8")).trim();

    if (!inputContent || isNaN(inputContent)) {
      throw new Error(
        `Erro: A entrada fornecida não é válida ou não é um número. Por favor, forneça um valor numérico válido.`
      );
    }

    const radius = parseFloat(inputContent);

    const sphereVolume = calculateSphereVolume(radius);

    console.log(`VOLUME = ${sphereVolume.toFixed(3)}`);
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
