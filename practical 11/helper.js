
export function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function parseTimeInput(input) {
  if (!input) return null;
  input = input.trim();

  if (input.includes(":")) {
    const [m, s] = input.split(":").map(Number);
    if (isNaN(m) || isNaN(s)) return null;
    return m * 60 + s;
  }
  const sec = Number(input);
  return isNaN(sec) ? null : sec;
}

export function logEvent(message) {
  console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
}
