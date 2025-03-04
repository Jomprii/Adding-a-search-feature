const jsonURL = "https://jomprii.github.io/students/students.json";

fetch(jsonURL)
  .then((response) => response.json())
  .then((data) => {
    let courselist = document.getElementById("course-list");

    if (data.courses && Array.isArray(data.courses)) {
      data.courses.forEach((course) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${course.year_level} year - ${course.sem} sem - ${course.code} = ${course.description} - ${course.credit}`;
        listItem.classList.add("course-item");
        courselist.appendChild(listItem);
      });
    } else {
      console.error("Expected 'students' array but got:", data);
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));

function searchCourses() {
  let input = document.getElementById("searchinput").value.toLowerCase();
  let items = document.querySelectorAll(".course-item");

  items.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
