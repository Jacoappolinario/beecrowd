const { readFile } = require("fs").promises;

const INPUT_FILE_PATH = process.argv[2] || "/dev/stdin";

const DAYS_IN_A_YEAR = 365;
const DAYS_IN_A_MONTH = 30;

function convertDaysToYearsMonthDays(totalDays) {
  const years = Math.floor(totalDays / DAYS_IN_A_YEAR);
  const remainingDaysAfterYears = totalDays % DAYS_IN_A_YEAR;
  const months = Math.floor(remainingDaysAfterYears / DAYS_IN_A_MONTH);
  const days = remainingDaysAfterYears % DAYS_IN_A_MONTH;

  return `${years} ano(s)\n${months} mes(es)\n${days} dia(s)`;
}

async function main() {
  try {
    const inputContent = (await readFile(INPUT_FILE_PATH, "utf-8")).trim();
    const totalDays = parseInt(inputContent);

    if (!totalDays) {
      throw new Error(`Erro: O arquivo de entrada não contém o dado esperado.`);
    }

    const formattedAge = convertDaysToYearsMonthDays(totalDays);

    console.log(formattedAge);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(
        `Erro: O arquivo ${INPUT_FILE_PATH} não pôde ser encontrado.`
      );
    } else {
      console.error(
        `Erro ao processar o arquivo ${INPUT_FILE_PATH}: ${error.message}`
      );
    }
  }
}

main();
