let projectsSection = document.getElementById("#projects");

const myProject = [
  {
    name: "ARAS: web",
    stacks: ["ReactJs", "Javascript"],
    reserved: "Aseman Rayaneh",
  },
  {
    name: "ARAS: mobile",
    stacks: ["ReactNative", "Javascript"],
    reserved: "Aseman Rayaneh",
  },
  {
    name: "ARAS: administrator",
    stacks: ["ReactJs", "Javascript"],
    reserved: "Aseman Rayaneh",
  },
  {
    name: "UPER: web",
    stacks: ["ASP.Net core", "VueJs", "PostgreSQL", "MongoDB", "Redis"],
    reserved: "Arvin Pishgaman",
  },
  {
    name: "UPER: administrator",
    stacks: ["ASP.Net core", "Angular", "PostgreSQL", "MongoDB", "Redis"],
    reserved: "Arvin Pishgaman",
  },
  {
    name: "UPER: mobile",
    stacks: ["ASP.Net core", "Flutter", "PostgreSQL", "MongoDB", "Redis"],
    reserved: "Arvin Pishgaman",
  },
  {
    name: "Farmina: mobile",
    stacks: ["Django", "Flutter", "PostgreSQL", "MongoDB", "Redis"],
    reserved: "I am owner",
  },
  {
    name: "Farmina: web",
    stacks: ["Django", "Flutter", "PostgreSQL", "MongoDB", "Redis"],
    reserved: "I am owner",
  },
  {
    name: "Farmina: administrator",
    stacks: ["Django", "Flutter", "PostgreSQL", "MongoDB", "Redis"],
    reserved: "I am owner",
  },
  {
    name: "Rahvar: Passenger",
    stacks: ["PHP", "Flutter", "MySQL"],
    reserved: "Rahvar LLC",
  },
  {
    name: "Rahvar: Driver",
    stacks: ["PHP", "Flutter", "MySQL"],
    reserved: "Rahvar LLC",
  },
  {
    name: "Rahvar: administator",
    stacks: ["PHP", "ReactJs", "MySQL"],
    reserved: "Rahvar LLC",
  },
  {
    name: "Salamat Darman",
    stacks: ["PHP", "Flutter", "MySQL"],
    reserved: "Panahi",
  },
  {
    name: "Maghzrayaneh: mobile",
    stacks: ["PHP", "Flutter", "MySQL"],
    reserved: "Maghzrayaneh co.",
  },
  {
    name: "Maghzrayaneh: administator",
    stacks: ["PHP", "MySQL"],
    reserved: "Maghzrayaneh co.",
  },
  {
    name: "Barex",
    stacks: ["ASP.Net core", "ReactJs", "PostgreSQL"],
    reserved: "Barex co.",
  },
  {
    name: "Sarzamin Ajayeb",
    stacks: ["PHP", "ReactNative", "MySQL"],
    reserved: "Barex co.",
  },
  {
    name: "SAFE",
    stacks: ["ASP.Net core", "ReactJs", "Microsoft SQL server"],
    reserved: "Taratech",
  },
  {
    name: "THD",
    stacks: ["ASP.Net core", "ReactJs", "Microsoft SQL server"],
    reserved: "Taratech",
  },
  {
    name: "CAM",
    stacks: ["ASP.Net core", "ReactJs", "Microsoft SQL server"],
    reserved: "Taratech",
  },
  {
    name: "MAHAT",
    stacks: ["ASP.Net core", "ReactJs", "Microsoft SQL server"],
    reserved: "Taratech",
  },
  {
    name: "Darooname | Dampezeshk",
    stacks: ["NodeJs", "Flutter", "MySQL"],
    reserved: "NooraDevelopers",
  },
  {
    name: "SalamatPedia",
    stacks: ["NodeJs", "Flutter", "MySQL"],
    reserved: "NooraDevelopers",
  },
  {
    name: "DanaDam",
    stacks: ["NodeJs", "Flutter", "MySQL"],
    reserved: "NooraDevelopers",
  },
  {
    name: "Bla: Body landmark analysis",
    stacks: ["Python", "AI", "Image proccessing"],
    reserved: "NooraDevelopers",
  },
];

function getRandomColor() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

const onProjectClick = (projectName) => {
  const project = myProject.find((p) => p.name === projectName);

  const projectTitle = document.getElementById("#project_title");
  const projectOwner = document.getElementById("#project_owner");
  const projectStack = document.getElementById("#project_stack");
  projectTitle.innerHTML = projectName;
  projectOwner.innerHTML = project.reserved;
  project.stacks.forEach(
    (q) =>
      (projectStack.innerHTML += `<span class="badge rounded-pill bg-primary">${q}</span>`)
  );
};

myProject.forEach((project) => {
  projectsSection.innerHTML += `<button type="button" class="btn m-1" style="background-color: ${getRandomColor()};" onclick="onProjectClick('${
    project.name
  }')" data-bs-toggle="modal" data-bs-target="#myModal">${
    project.name
  }</button>`;
});
