export const getPluralNoun = (number: number): string => {
  const table = {
    firstVariant: 'товар',
    secondVariant: 'товара',
    thirstVariant: 'товаров',
  };
  let res = '';

  let n = number % 100;

  if (n >= 5 && n <= 20) {
    return table.thirstVariant;
  }

  n = number % 10;

  if (n === 1) {
    return table.firstVariant;
  }

  if (n >= 2 && n <= 4) {
    return table.secondVariant;
  }

  return  table.thirstVariant;
}