function gearRotations(input: string) {
  const lines = input.split("\n");

  let sum = 0;

  for (let row = 0; row < lines.length; ++row) {
    for (let column = 0; column < lines[row].length; ++column) {
      if (!isNaN(+lines[row][column])) {
        let numberStartIndex = column;
        let numberEndIndex = column;

        for (column = column + 1; column < lines[row].length; ++column) {
          if (!isNaN(+lines[row][column])) {
            numberEndIndex = column;
          } else {
            break;
          }
        }

        let foundSymbol = false;
        let number = +lines[row].substring(
          numberStartIndex,
          numberEndIndex + 1
        );

        const start = Math.max(numberStartIndex - 1, 0);
        const end = Math.min(numberEndIndex + 1, lines[row].length - 1);

        const isASymbol = (char: string) => char !== "." && isNaN(+char);

        for (let i = start; i <= end; i++) {
          if (row > 0 && isASymbol(lines[row - 1][i])) {
            foundSymbol = true;
          }

          if (row < lines.length - 1 && isASymbol(lines[row + 1][i])) {
            foundSymbol = true;
          }
        }

        if (isASymbol(lines[row][start]) || isASymbol(lines[row][end])) {
          foundSymbol = true;
        }

        if (foundSymbol) {
          sum += number;
        }
      }
    }
  }

  console.log({ sum });

  return sum;
}

gearRotations(`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`);
