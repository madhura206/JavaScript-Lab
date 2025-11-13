document.addEventListener("DOMContentLoaded", () => {
  const name = prompt("Enter your name:");
  if (name) {
    alert(`Welcome, ${name}!`);
    console.log(`Student: ${name}`);
    document.getElementById("greeting").innerText = `Hello ${name}, search your friends below.`;
  }

  // 🧑‍🎓 Student name to LinkedIn mapping
  const studentProfiles = {
    "Madhura Hawelikar": "https://www.linkedin.com/in/madhura-example",
    "Monalika Kubde": "https://www.linkedin.com/in/monalika-kubde-803200293/",
    "Reyon Bose": "https://www.linkedin.com/in/reyon-bose-049125288/",
    "Shrunal Mehar": "https://www.linkedin.com/in/shrunal-mehar-6a89a4292/",
    "Kshitij Bhele": "https://www.linkedin.com/in/kshitij-bhele-7a2b58285/",
    "Mukund Kuthe": "http://linkedin.com/in/mukundkuthe/",
    "Mahak Mehadia": "https://www.linkedin.com/in/mahak-mehadia-236648262/",
    "Mahek Shah": "https://www.linkedin.com/in/mahek-shah-39a98a27b/",
    "Maheen Meshram": "https://www.linkedin.com/in/maheen-meshram-965066284/",
    "Rahul Malani": "https://www.linkedin.com/in/rahul-malani-693740284/",
    "Manas Pinjarkar": "https://www.linkedin.com/in/manas-pinjarkar-3a2070290/",
    "Riya Verma": "https://www.linkedin.com/in/riya-varma-8b8b78283/",
    // "Neha": "https://www.linkedin.com/in/neha-example",
    // "Rohan": "https://www.linkedin.com/in/rohan-example",
    // "Sakshi": "https://www.linkedin.com/in/sakshi-example",
    // "Ankita": "https://www.linkedin.com/in/ankita-example",
    // "Varun": "https://www.linkedin.com/in/varun-example",
    // "Mehul": "https://www.linkedin.com/in/mehul-example",
    // "Divya": "https://www.linkedin.com/in/divya-example",
    // "Jay": "https://www.linkedin.com/in/jay-example"
  };

  const searchBar = document.getElementById("searchBar");
  const results = document.getElementById("results");

  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    results.innerHTML = "";

    const matched = Object.keys(studentProfiles).filter(student =>
      student.toLowerCase().includes(query)
    );

    if (matched.length === 0) {
      results.innerHTML = "<li>No student found</li>";
    } else {
      matched.forEach(student => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = studentProfiles[student];
        link.innerText = student;
        link.target = "_blank"; // opens in new tab
        link.style.color = "#4a148c";
        link.style.textDecoration = "none";
        li.appendChild(link);
        results.appendChild(li);
      });
    }
  });
});
