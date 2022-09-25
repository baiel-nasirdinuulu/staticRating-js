window.onload = function () {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = "0";
    incrementCounter();
    function incrementCounter() {
      let a= +counter.innerText;
      const dataCeil = counter.getAttribute("data-ceil");
      const increment = dataCeil / 15;

    a= Math.ceil(a + increment);

      if (a< dataCeil) {
        counter.innerText = a
        setTimeout(incrementCounter, 50);
      } else {
        counter.innerText = dataCeil;
      }
    }
  });
};
