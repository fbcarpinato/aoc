const parseNumbersOnTheLeft = (line: string, startIndex: number): string => {
  let digits = "";

  for (let i = startIndex; i >= 0; --i) {
    if (!isNaN(+line[i])) {
      digits = line[i] + digits;
    } else {
      break;
    }
  }

  return digits;
};

const parseNumbersOnTheRight = (line: string, startIndex: number): string => {
  let digits = "";

  for (let i = startIndex; i < line.length; ++i) {
    if (!isNaN(+line[i])) {
      digits += line[i];
    } else {
      break;
    }
  }

  return digits;
};

const parseAdjacentNumberOnLine = (line: string, column: number): number[] => {
  const start = Math.max(column - 1, 0);
  const end = Math.min(column + 1, line.length - 1);

  let numbers: number[] = [];

  let left = +line[start];
  let center = +line[column];
  let right = +line[end];

  if (!isNaN(center)) {
    numbers.push(
      +(
        parseNumbersOnTheLeft(line, column - 1) +
        parseNumbersOnTheRight(line, column)
      )
    );

    return numbers;
  }

  if (!isNaN(left)) {
    numbers.push(+parseNumbersOnTheLeft(line, start));
  }

  if (!isNaN(right)) {
    numbers.push(+parseNumbersOnTheRight(line, end));
  }

  return numbers;
};

function gearRotations2(input: string) {
  const lines = input.split("\n");

  let sum = 0;

  for (let row = 0; row < lines.length; ++row) {
    for (let column = 0; column < lines[row].length; ++column) {
      if (lines[row][column] === "*") {
        const numbers = [];

        if (row > 0) {
          numbers.push(...parseAdjacentNumberOnLine(lines[row - 1], column));
        }

        if (row < lines.length - 1) {
          numbers.push(...parseAdjacentNumberOnLine(lines[row + 1], column));
        }

        numbers.push(...parseAdjacentNumberOnLine(lines[row], column));

        if (numbers.length >= 2) {
          sum += numbers[0] * numbers[1];
        }
      }
    }
  }

  console.log({ sum });

  return sum;
}

gearRotations2(`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`);
