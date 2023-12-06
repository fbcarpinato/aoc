const replacements: Record<string, string> = {
  nine: "9",
  eight: "8",
  seven: "7",
  six: "6",
  five: "5",
  four: "4",
  three: "3",
  two: "2",
  one: "1",
};

const trebuchet2 = (source: string) => {
  const lines = source.split("\n");

  const numbers = lines.map((line) => {
    let firstNumber = "";
    let secondNumber = "";

    for (let i = 0; i < line.length; i++) {
      if (!isNaN(+line[i])) {
        firstNumber = firstNumber || line[i];
        secondNumber = line[i];
        continue;
      }

      for (let j = i + 1; j <= line.length; j++) {
        const substring = line.substring(i, j);

        if (replacements[substring]) {
          firstNumber = firstNumber || replacements[substring];
          secondNumber = replacements[substring];

          i = j - 1;
        }
      }
    }

    return +(firstNumber + secondNumber);
  });

  const sum = numbers.reduce((sum, curr) => sum + curr, 0);

  console.log({ sum });

  return sum;
};

trebuchet2(`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`);
