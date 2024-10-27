export function generateHours() {
  let hours = [];
  let hour = 9;
  let min = 0;

  while (hour < 20 || (hour === 20 && min === 0)) {
    let formatedHour = hour.toString().padStart(2, "0");
    let formatedMin = min.toString().padStart(2, "0");
    hours.push(`${formatedHour}:${formatedMin}`);

    min += 30;
    if (min === 60) {
      min = 0;
      hour++;
    }
  }

  return hours;
}
