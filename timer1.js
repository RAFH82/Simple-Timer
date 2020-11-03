const timerArr = process.argv.slice(2);
if (timerArr.length > 0) {
  for (element of timerArr) {
    if (Number(element) >= 0 && !Number.isNaN(element)) {
      let delay = Number(element * 1000);
        setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);
    };
  }
};
