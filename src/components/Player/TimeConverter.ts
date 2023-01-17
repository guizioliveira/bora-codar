export function SecondsToMinutes(timeAmount: number) {
  const minutes =  Math.floor(timeAmount / 60);
  let seconds = Math.floor(timeAmount %60);

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}