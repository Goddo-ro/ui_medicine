// TODO: add tests

export function formatDate(input: string): string {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error('Неверный формат даты');
  }

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return formatter.format(date);
}
