const sentence = "hello there from lighthouse labs";

let delay = 50;
for ( const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  //increment timer
  delay += 50;
}
// fix end of line bug
process.stdout.write("\n")
