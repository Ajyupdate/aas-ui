export function generateRandomColorUsingId(text: string) {
  // Simple hash function to generate a numeric hash value
  const hashCode = Array.from(text).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );

  // Convert the hash code to a hex color code
  const colorCode = `#${(hashCode & 0xffffff).toString(16).padStart(6, "0")}`;

  return colorCode;
}

// Example usage

export function getRandomColor() {
  // Generate random values for RGB components
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  // Ensure alpha channel is set to FF (fully opaque)
  const alphaChannel = "FF";

  // Create a color string in the format "#RRGGBB"
  const colorCode = `#${randomRed.toString(16).padStart(2, "0")}${randomGreen
    .toString(16)
    .padStart(2, "0")}${randomBlue
    .toString(16)
    .padStart(2, "0")}${alphaChannel}`;

  return colorCode;
}
