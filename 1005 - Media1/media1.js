const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

// Weights assigned to grades A and B for weighted average calculation
const GRADE_A_WEIGHT = 3.5;
const GRADE_B_WEIGHT = 7.5;

// Sum of weights for normalization
const SUM_OF_WEIGHTS = GRADE_A_WEIGHT + GRADE_B_WEIGHT;

async function main() {
  try {
    const [A, B] = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split("\n")
      .map((value) => parseFloat(value));

    if (isNaN(A) || isNaN(B)) {
      throw new Error(
        `Error: Invalid input value. Please check the values assigned to A and B.`
      );
    }

    const average = (A * GRADE_A_WEIGHT + B * GRADE_B_WEIGHT) / SUM_OF_WEIGHTS;

    console.log(`MEDIA = ${average.toFixed(5)}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: The file ${INPUT_FILE} could not be found.`);
    } else {
      console.error(`Error processing file ${INPUT_FILE}: ${error.message}`);
    }
  }
}

main();
