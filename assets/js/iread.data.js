let booksSection = document.getElementById("#books");

const books = [
  {
    name: "American Kingpin",
    pic: "kingpin.jpg",
  },
  {
    name: "Dive into Design patterns",
    pic: "designpatterns.png",
  },
  {
    name: "Dive into Refactoring",
    pic: "refactoring.jpg",
  },
  {
    name: "The Science of Interstellar",
    pic: "intrestellar.jpg",
  },
  {
    name: "The berlin wall",
    pic: "berlin.jpg",
  },
];

books.forEach((book) => {
  booksSection.innerHTML += `
    <div class="card col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 border-0 p-1">
  <img src="./assets/img/${book.pic}" class="card-img-top img-fluid" alt="${book.name}" >
</div>`;
});
