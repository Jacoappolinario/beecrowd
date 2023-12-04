const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

async function main() {
  try {
    const inputContent = await readFile(INPUT_FILE, "utf-8");
    const [A, B] = inputContent.split("\n").map((value) => parseInt(value));

    if (isNaN(A) || isNaN(B)) {
      throw new Error(
        "Error: Invalid input values. Make sure that the values of A and B are integers."
      );
    }

    const X = A + B;

    console.log(`X = ${X}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: The file ${INPUT_FILE} could not be found.`);
    } else {
      console.error(`Error processing file ${INPUT_FILE}: ${error.message}`);
    }
  }
}

main();
