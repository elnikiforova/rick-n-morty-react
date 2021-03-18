// get random number from 1 to number
export const getRandomArray = (number, j) => {
  const result = [];
  for (let i = 0; i < j; i += 1) {
    result.push(Math.floor(Math.random() * number) + 1);
  }
  return result;
};

// R&M url base
export const base = 'https://rickandmortyapi.com/api/';
