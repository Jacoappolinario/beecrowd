const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

// Weights assigned to grades A and B and C for weighted average calculation
const GRADE_A_WEIGHT = 2;
const GRADE_B_WEIGHT = 3;
const GRADE_C_WEIGHT = 5;

// Sum of weights for normalization
const SUM_OF_WEIGHTS = GRADE_A_WEIGHT + GRADE_B_WEIGHT + GRADE_C_WEIGHT;

async function main() {
  try {
    const [A, B, C] = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split("\n")
      .map((value) => parseFloat(value));

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      throw new Error(
        `Error: Invalid input value. Please check the values assigned to A and B and C.`
      );
    }

    const average =
      (A * GRADE_A_WEIGHT + B * GRADE_B_WEIGHT + C * GRADE_C_WEIGHT) /
      SUM_OF_WEIGHTS;

    console.log(`MEDIA = ${average.toFixed(1)}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: The file ${INPUT_FILE} could not be found.`);
    } else {
      console.error(`Error processing file ${INPUT_FILE}: ${error.message}`);
    }
  }
}

main();
