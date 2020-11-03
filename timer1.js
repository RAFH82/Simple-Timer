const timerArr = process.argv.slice(2);

const beep = () => {
  process.stdout.write("\x07");
};

const beepTimer = element => {
  let startCheck = Number(element) >= 0 && !Number.isNaN(element);
  if (startCheck) {
    let delay = Number(element * 1000);
    setTimeout(beep, delay);
  }
};

for (element of timerArr) {
  beepTimer(element);
}
