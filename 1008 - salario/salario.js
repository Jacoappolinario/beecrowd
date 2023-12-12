const { readFile } = require("fs").promises;

const INPUT_FILE = process.argv[2] || "/dev/stdin";

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE, "utf-8"))
      .trim()
      .split("\n")
      .map((value) => Number(value));

    if (inputContent.some(isNaN)) {
      throw new Error(
        `Error: Invalid input value. Please check the input values.`
      );
    }

    const [employeeNumber, hoursWorked, amountReceivedForHours] = inputContent;

    const salary = hoursWorked * amountReceivedForHours;

    console.log(`NUMBER = ${employeeNumber}`);
    console.log(`SALARY = U$ ${salary.toFixed(2)}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(`Error: The file ${INPUT_FILE} could not be found.`);
    } else {
      console.log(`Error processing file ${INPUT_FILE}: ${error.message}`);
    }
  }
}

main();
