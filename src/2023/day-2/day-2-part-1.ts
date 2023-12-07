const maxValues: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
};

function cubeConundrum(input: string): number {
  const games = input.split("\n");
  let count: number = 0;

  for (const game of games) {
    const [gameString, reveals] = game.split(": ");
    const [_, gameIdNumber] = gameString.trim().split(" ");
    const hashmap = new Map<number, boolean>();

    for (const reveal of reveals.split(";")) {
      const cubes = reveal.split(", ");
      for (const cube of cubes) {
        const [value, color] = cube.trim().split(" ");

        if (+value > maxValues[color]) {
          hashmap.set(+gameIdNumber, false);
        }
      }
    }

    if (!hashmap.has(+gameIdNumber)) {
      count += +gameIdNumber;
    }
  }

  return count;
}

const possibleCount = cubeConundrum(
  `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`
);

console.log(possibleCount);
