const tagsEl = document.getElementById("tags");
const textarea = document.getElementById(`textarea`);

textarea.focus();

textarea.addEventListener(`keyup`, (e) => {
   createTags(e.target.value);
});

/*.filter() is used to remove empty or whitespace-only elements from the array.*/
function createTags(inputText) {
   const tags = inputText
      .split(",")
      .map((tag) => tag.replace(/\s+/g, ""))
      .filter((tag) => tag.trim() !== ``);

   tagsEl.innerHTML = "";

   tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.classList.add(`tag`);
      tagEl.innerText = `${tag}`;
      tagsEl.appendChild(tagEl);
   });
}
