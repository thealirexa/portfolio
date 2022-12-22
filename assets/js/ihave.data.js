let programmingSkillSection = document.getElementById("#programming");
let databasesSkillSection = document.getElementById("#databases");
let personalSkillSection = document.getElementById("#personal");
let otherSkillSection = document.getElementById("#other");
let hobbiesSection = document.getElementById("#hobbies");

const ProgrammingSkills = [
  {
    title: "Django",
    percent: 50,
  },
  {
    title: "NestJs",
    percent: 60,
  },
  {
    title: "NodeJs",
    percent: 70,
  },
  {
    title: "Flutter",
    percent: 70,
  },
  {
    title: "ReactJs",
    percent: 55,
  },
  {
    title: "Typescript / Javascript",
    percent: 80,
  },
  {
    title: "Python",
    percent: 70,
  },
];

const databaseSkills = [
  {
    title: "PostgreSQL",
    percent: 60,
  },
  {
    title: "MongoDB",
    percent: 60,
  },
  {
    title: "Database Design",
    percent: 70,
  },
  {
    title: "Redis",
    percent: 65,
  },
];

const personalSkills = [
  { title: "Teamwork", percent: 75 },
  { title: "Problem solving", percent: 100 },
  { title: "Work under pressure", percent: 100 },
  { title: "pioneering", percent: 90 },
];

const otherSkills = [
  { title: "Git", percent: 90 },
  { title: "Gitlab CI/CD", percent: 30 },
  { title: "NGINX/TI", percent: 40 },
  { title: "Docker", percent: 30 },
  { title: "Docker compose", percent: 30 },
];

const hobbies = [
  "Reading books",
  "Listening music",
  "Watching movie (Drama, Thriller, Adventure)",
  "Opensource contribution",
];

const addProgressSet = (parent, skills) => {
  skills.forEach((skill) => {
    const div = document.createElement("div");
    div.className = `progress my-2`;
    div.innerHTML = `<div class="progress-bar text-start p-2" role="progressbar" style="width: ${skill.percent}%;"
                          aria-valuenow="${skill.percent}" aria-valuemin="0" aria-valuemax="100">${skill.title}
                          </div>`;
    parent.appendChild(div);
  });
};

const addBadgeSet = (parent, hobbies) => {
  const div = document.createElement("div");
  div.className = "my-2";
  hobbies.forEach((hobby) => {
    div.innerHTML += `<span class="badge text-bg-secondary">${hobby}</span>`;
    parent.appendChild(div);
  });
};

addProgressSet(programmingSkillSection, ProgrammingSkills);
addProgressSet(databasesSkillSection, databaseSkills);
addProgressSet(personalSkillSection, personalSkills);
addProgressSet(otherSkillSection, otherSkills);

addBadgeSet(hobbiesSection, hobbies);
