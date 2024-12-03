export const highlightMatch = (
  text: string,
  query: string,
): React.ReactNode => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'i');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <strong key={index} style={{ fontWeight: 'bold' }}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
};
