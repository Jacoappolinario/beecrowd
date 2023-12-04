const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";
const N = 3.14159;

async function main() {
  try {
    const inputContent = await readFile(INPUT_FILE, "utf-8");
    const radius = parseFloat(inputContent);

    if (isNaN(radius) || radius < 0) {
      throw new Error(
        "Error: Invalid input value. Please check that the value assigned to the radius is numeric, greater than zero and of floating point type."
      );
    }

    const area = N * Math.pow(radius, 2);

    console.log(`A=${area.toFixed(4)}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: The file ${INPUT_FILE} could not be found.`);
    } else {
      console.error(`Error processing file ${INPUT_FILE}: ${error.message}`);
    }
  }
}

main();
