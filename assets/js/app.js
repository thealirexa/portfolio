const typed = document.getElementsByClassName(".typed");
const greeting = document.getElementById("#greeting");

const greetings = [
  "Hi π",
  "Hello π",
  "Hey there π",
  "Howdy! π",
  "Just a friendly little hello from me to you π",
  "Hi there! Just felt like sharing a smile with you today π",
  "Hey, you! What's new? π",
  "In the immortal words of Adele, 'Helloβ¦it's meβ¦' π",
  "Β‘Hola! ππ€ ",
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var indexOfGreeting = randomNumber(0, greetings.length - 1);
console.log(indexOfGreeting);
greeting.innerHTML = greetings[indexOfGreeting];

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
