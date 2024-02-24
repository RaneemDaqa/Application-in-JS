const svgs = document.querySelectorAll("svg");

const increaseCount= (() => {
  let count = 0;
  return (event) => {
    const countValue = event.target
      .closest(".count")
      .querySelector("#countValue");
    count += 1;
    countValue.textContent = count;
  };
})();

svgs.forEach((svg) => {
  svg.onclick = increaseCount;
});
