export function textToBulletList(
  text: string = "",
  className?: string
): React.ReactNode {
  const items = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"))
    .map((line) => line.replace(/^-\s*/, ""));

  if (items.length === 0) return null;

  return (
    <ul className="mission-list">
      {items.map((item, index) => (
        <li key={index} className="mission-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
