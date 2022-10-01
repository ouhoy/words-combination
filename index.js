function $(id, slectAll = false) {
  return slectAll ? document.querySelectorAll(id) : document.querySelector(id);
}

const btn = $(".btn");
const keyWords = $(".key-words");
const firstKeyWord = $(".first-key-word");
const lastKeyWord = $(".second-key-word");
const checkBox = $("#check");
const textOutput = $(".text-output");
const p = document.createElement("p");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const firstWord = firstKeyWord.value.trim();
  const lastWord = lastKeyWord.value.trim();
  console.log(lastWord);

  if (!keyWords.value) alert("Ara ghina kra asa7bi");
  const words = keyWords.value.split(",");
  const wordsCombo = [];
  if (words.length <= 1) alert("Gn ogar n yat lkalima");
  if (firstWord) {
    for (let i = 0; i < words.length; i++) {
      wordsCombo.push(firstWord + words[i].trim());
    }
  }
  if (lastWord) {
    for (let i = 0; i < words.length; i++) {
      wordsCombo.push(words[i].trim() + lastWord);
      console.log(wordsCombo);
    }
  }

  if (!firstWord && !lastWord) {
    for (let i = 0; i < words.length; i++) {
      for (let l = 0; l < words.length; l++) {
        if (words[i] === words[l]) continue;
        wordsCombo.push(
          words[i].trim().slice(0, 1).toUpperCase() +
            words[i].trim().slice(1) +
            words[l].trim()
        );
      }
    }
  }
  p.textContent = "";
  p.textContent = wordsCombo.toString().replaceAll(",", " ");
  textOutput.append(p);
});
