//command line arg 
const args = process.argv.slice(2);

//alarm function 
const alarm  = function (time) {
  if (time > 0 && !isNaN(time)) { //rule out edge cases by checking if time is positive and not NaN
    setTimeout(() => { //schedule alarm sound via setTimeout
      process.stdout.write('\x07'); // node system beep sound 
    }, time * 1000);     
  }
};

//command line loop
for (const arg of args) {
  const time = parseInt(arg); // convert arg into an integer

  if (!isNaN(time) && time >= 0) {
    alarm(time); // set alarm sound if time is valid
  }
}