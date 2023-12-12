const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split("\n")
      .map((value) => parseInt(value));

    if (inputContent.some(isNaN)) {
      throw new Error(
        `Error: Invalid input value. Please check the input values.`
      );
    }

    const [A, B, C, D] = inputContent;

    const difference = A * B - C * D;

    console.log(`DIFERENCA = ${difference}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: The file ${INPUT_FILE} could not be found.`);
    } else {
      console.error(`Error processing file ${INPUT_FILE}: ${error.message}`);
    }
  }
}

main();
