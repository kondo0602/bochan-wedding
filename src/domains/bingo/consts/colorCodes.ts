export const colorCodes = {
  crimson: "#eb1e2f",
  emerald: "#4fcf64",
  brooom: "#fee716",
  cerulean: "#02a6f2",
  amber: "#ffc105",
} as const;

export type ColorCode = typeof colorCodes[keyof typeof colorCodes];

export const getRandomColor = (): ColorCode => {
  const colors = Object.values(colorCodes);
  return colors[Math.floor(Math.random() * colors.length)];
};
