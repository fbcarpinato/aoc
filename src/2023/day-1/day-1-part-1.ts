const trebuchet = (source: string): number => {
  const lines = source.split("\n");

  const numbers = lines.map((line) => {
    let firstNumber = "";
    let secondNumber = "";

    line.split("").forEach((char) => {
      if (!isNaN(+char)) {
        if (!firstNumber) {
          firstNumber = char;
        }
        secondNumber = char;
      }
    });

    return +(firstNumber + secondNumber);
  });

  const sum = numbers.reduce((sum, curr) => (sum += curr), 0);

  console.log(sum);

  return sum;
};

trebuchet(`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`);
