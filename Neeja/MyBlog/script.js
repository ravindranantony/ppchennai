// Sample project data
const projects = [
  {
    title: "Calculator",
    description: "The calculator project is a web-based application that allows users to perform basic arithmetic calculations. It provides a user-friendly interface where users can input numbers and perform operations such as addition, subtraction, multiplication, and division.",
    thumbnail: "https://static.vecteezy.com/system/resources/previews/004/987/809/original/calculator-icon-with-long-shadow-free-vector.jpg",
    link: "/Neeja/Calc/index.html"
  },
  {
    title: "Fibonacci Series",
    description: "The Fibonacci project is a program that generates the Fibonacci sequence. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.The project is implemented using a programming language such as JavaScript ",
    thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/012/389/550/small/fibonacci-sequence-circle-golden-ratio-geometric-shapes-spiral-snail-spiral-sea-shell-of-colorful-circles-sacred-geometry-logo-template-logarithmic-sequences-isolated-on-blue-background-vector.jpg",
    link: "/Neeja/Fibonacci/index.html"
  },
  {
    title: "Tic Tac Toe",
    description: "Tic Tac Toe is a classic two-player game played on a grid of 3x3 squares. The objective of the game is to be the first player to form a line of three of their symbols (either X or O) horizontally, vertically, or diagonally.",
    thumbnail: "https://chrispenner.ca/images/tictactoe.png",
    link: "/Neeja/Tic Tac Toe/index.html"
  }
];

// Function to create project elements
function createProjectElement(project) {
  const projectElement = document.createElement("div");
  projectElement.classList.add("col-lg-4", "mb-4");

  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const thumbnailElement = document.createElement("img");
  thumbnailElement.classList.add("card-img-top", "project-thumbnail");
  thumbnailElement.src = project.thumbnail;
  thumbnailElement.alt = project.title;

  const cardBodyElement = document.createElement("div");
  cardBodyElement.classList.add("card-body");

  const titleElement = document.createElement("h5");
  titleElement.classList.add("card-title");
  titleElement.textContent = project.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("card-text");
  descriptionElement.textContent = project.description;

  const linkElement = document.createElement("a");
  linkElement.href = project.link;
  linkElement.classList.add("btn", "btn-purple");
  linkElement.textContent = "View Project";
  linkElement.target = "_blank";

  cardBodyElement.appendChild(titleElement);
  cardBodyElement.appendChild(descriptionElement);
  cardBodyElement.appendChild(linkElement);

  cardElement.appendChild(thumbnailElement);
  cardElement.appendChild(cardBodyElement);
  projectElement.appendChild(cardElement);

  return projectElement;
}

// Display projects on the page
const projectContainer = document.getElementById("project-container");

projects.forEach(function(project) {
  const projectElement = createProjectElement(project);
  projectContainer.appendChild(projectElement);
});
