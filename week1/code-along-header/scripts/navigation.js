const current = document.querySelector(".navigation li.current a");
const actualPage = document.getElementById("actualPage");

if (current && actualPage) {
    actualPage.textContent = `${current.textContent}`;
}