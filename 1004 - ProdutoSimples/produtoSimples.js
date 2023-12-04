const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

async function main() {
  try {
    const [A, B] = (await readFile(INPUT_FILES, "utf-8"))
      .trim()
      .split("\n")
      .map((value) => parseInt(value));

    if (isNaN(A) || isNaN(B)) {
      throw new Error(
        "Error: Invalid input value. Please check the values assigned to A and B."
      );
    }

    const product = A * B;

    console.log(`PROD = ${product}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: The file ${INPUT_FILE} could not be found.`);
    } else {
      console.error(`Error processing file ${INPUT_FILE}: ${error.message}`);
    }
  }
}

main();
