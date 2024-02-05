export function timeToSecunds(time: string) {
  const [hours = "0", minutes = "0", secunds = "0"] = time.split(":");

  const hoursToSecunds = Number(hours) * 3600;
  const minutesToSecunds = Number(minutes) * 60;

  return hoursToSecunds + minutesToSecunds + Number(secunds);
}