const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split("\n");

    let sum = 0;

    inputContent.forEach((part) => {
      const [, partQuantity, partUnitPrice] = part
        .split(" ")
        .map((value) => Number(value));

      sum += partQuantity * partUnitPrice;
    });

    console.log(`VALOR A PAGAR: R$ ${sum.toFixed(2)}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: The file ${INPUT_FILE} could not be found.`);
    } else {
      console.log(`Error processing file ${INPUT_FILE}: ${error.message}`);
    }
  }
}

main();
