// Predefined student LinkedIn profiles
const studentProfiles = {
  "john doe": "https://www.linkedin.com/in/johndoe",
  "madhura": "https://www.linkedin.com/in/madhura-profile",
  "raj patil": "https://www.linkedin.com/in/rajpatil",
  "aarti singh": "https://www.linkedin.com/in/aartisingh",
  "priya mehta": "https://www.linkedin.com/in/priyamehta",
  "vikas sharma": "https://www.linkedin.com/in/vikassharma"
};

// Ask for user’s name
const studentName = prompt("Please enter your name:");
alert(`Hello, ${studentName}!`);
console.log("Logged in as:", studentName);

// Display greeting
const container = document.getElementById("info-container");
const message = document.createElement("p");
message.textContent = `Welcome, ${studentName}! You can search your classmates' LinkedIn profiles below.`;
message.style.fontSize = "18px";
container.appendChild(message);

// Show search section
document.getElementById("search-section").style.display = "block";

// Populate initial student list
const studentList = document.getElementById("student-list");
function populateStudentList() {
  studentList.innerHTML = '';
  Object.keys(studentProfiles).forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.onclick = () => window.open(studentProfiles[name], '_blank');
    studentList.appendChild(li);
  });
}

// Filter students based on input
function filterStudents() {
  const searchValue = document.getElementById("student-search").value.toLowerCase();
  studentList.innerHTML = '';

  const filtered = Object.keys(studentProfiles).filter(name => name.includes(searchValue));

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No student found.";
    li.style.color = "red";
    studentList.appendChild(li);
    return;
  }

  filtered.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.onclick = () => window.open(studentProfiles[name], '_blank');
    studentList.appendChild(li);
  });
}

populateStudentList(); // show all initially
