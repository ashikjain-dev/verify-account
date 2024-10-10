const codes = document.querySelectorAll(".codes");

codes[0].focus();

codes.forEach((container, idx) => {
  container.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      if (idx < codes.length - 1) {
        setTimeout(() => codes[idx + 1].focus(), 20);
      }
    } else if (e.key === "Backspace") {
      if (idx > 0) {
        setTimeout(() => codes[idx - 1].focus(), 20);
        codes[idx - 1].value = "";
      }
    } else if (e.key === "ArrowLeft") {
      if (idx > 0) {
        codes[idx - 1].focus();

        codes[idx - 1].value = "";
      }
    }
  });
});
