let scrollCounter = 0;
let curScrolled = 15;

export const handleSrcoll = (num: 1 | -1) => {
  if (num === 1) {
    scrollCounter += num;
    if (curScrolled - scrollCounter === 5) {
      curScrolled += 5;
      return true;
    }
  } else {
    if (scrollCounter === 0) return;
    scrollCounter += num;
  }
};
