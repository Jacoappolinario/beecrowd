const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";
const PI = 3.14159;

function calculateAreaOfRightTriangle(A, C) {
  return (1 / 2) * A * C;
}

function calculateAreaOfCircle(C) {
  return PI * C ** 2;
}

function calculateAreaOfTrapezoid(A, B, C) {
  return ((A + B) * C) / 2;
}

function calculateAreaOfSquare(B) {
  return B ** 2;
}

function calculateAreaOfRectangle(A, B) {
  return A * B;
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split(" ")
      .flatMap((value) => parseFloat(value) || []);

    if (!inputContent.length) {
      throw new Error(`Erro: O arquivo de entrada está vazio.`);
    }

    const [A, B, C] = inputContent;

    const areaOfTheRightTriangle = calculateAreaOfRightTriangle(A, C);
    const areaOfTheCircle = calculateAreaOfCircle(C);
    const areaOfTheTrapezoid = calculateAreaOfTrapezoid(A, B, C);
    const areaOfTheSquare = calculateAreaOfSquare(B);
    const areaOfTheRectangle = calculateAreaOfRectangle(A, B);

    console.log(`TRIANGULO: ${areaOfTheRightTriangle.toFixed(3)}`);
    console.log(`CIRCULO: ${areaOfTheCircle.toFixed(3)}`);
    console.log(`TRAPEZIO: ${areaOfTheTrapezoid.toFixed(3)}`);
    console.log(`QUADRADO: ${areaOfTheSquare.toFixed(3)}`);
    console.log(`RETANGULO: ${areaOfTheRectangle.toFixed(3)}`);
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
