const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split("\n");

    if (inputContent.length !== 3) {
      throw new Error(
        `Error: Input file does not have the expected number of lines.`
      );
    }

    const [, fixedSalary, totalSales] = inputContent;

    const bonus = parseFloat(totalSales) * (15 / 100);
    const finalSalaryOfTheMonth = parseFloat(fixedSalary) + bonus;

    console.log(`TOTAL = R$ ${finalSalaryOfTheMonth.toFixed(2)}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: The file ${INPUT_FILE} could not be found.`);
    } else {
      console.error(`Error processing file ${INPUT_FILE}: ${error.message}`);
    }
  }
}

main();
