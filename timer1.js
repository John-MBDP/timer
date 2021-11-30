// process.stdout.write("\x07");
const filtered = process.argv
  .slice(2)
  .filter((time) => !isNaN(time) && time >= 0);

filtered.forEach((time) => {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
});
