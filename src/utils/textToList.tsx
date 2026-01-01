import React from "react";

export function textToBulletList(
  text: string = "",
  className?: string
): React.ReactNode {
  const items = text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.startsWith("-"))
    .map(line => line.replace(/^-\s*/, ""));

  if (items.length === 0) return null;

  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
