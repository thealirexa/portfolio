const typed = document.getElementsByClassName(".typed");
console.log(typed);
if (typed) {
  let typed_strings = [
    "Software engineer",
    "Problem-solver",
    "Result-oriented",
    "Open source fan",
    "Freelancer",
    "Backend developer",
    "Frontend developer",
    "Mobile developer",
  ];
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}
