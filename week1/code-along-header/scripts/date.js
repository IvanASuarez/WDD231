const full = document.querySelector("#full");
const year = document.querySelector("#year");


const today = new Date();
const formattedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);

full.innerHTML = `
    <span class="label">Last Modification:</span>
    <span class="date">${formattedDate}</span>`;

year.textContent = today.getFullYear();