const jsonURL = "https://jomprii.github.io/students/students.json";

fetch(jsonURL)
  .then((response) => response.json())
  .then((data) => {
    let courselist = document.getElementById("course-list");

    // Check if JSON contains 'students' array
    if (data.courses && Array.isArray(data.courses)) {
      data.courses.forEach((course) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${course.year_level} year - ${course.sem} sem - ${course.code} = ${course.description} - ${course.credit} <br> <br>`;
        courselist.appendChild(listItem);
      });
    } else {
      console.error("Expected 'students' array but got:", data);
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));
