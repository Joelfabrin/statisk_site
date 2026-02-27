const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const container = document.querySelector(".btns");

function getData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData);
}

function showData(data) {
  console.log(data);
  data.forEach((kategori) => {
    container.innerHTML += `<a href="produktliste.html">${kategori.category}</a>`;
  });
}

getData();
