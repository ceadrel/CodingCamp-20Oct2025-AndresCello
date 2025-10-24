function welcomeSpeech() {
  let name = prompt("Enter your name:") || "Guest";
  const greetElement = document.getElementById("visitor") || document.getElementById("greet-name");

  if (greetElement) {
    greetElement.textContent = `Hi ${name}, `;
  }
}

welcomeSpeech();

const form = document.getElementById("messageForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const tel = document.getElementById("tel").value.trim();
    const birthdate = document.getElementById("birthdate").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "-";
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out Name, Email, and Message!");
      return;
    }

    document.getElementById("currentTime").textContent = new Date().toLocaleString();
    document.getElementById("resultName").textContent = name;
    document.getElementById("resultEmail").textContent = email;
    document.getElementById("resultTel").textContent = tel;
    document.getElementById("resultBirth").textContent = birthdate;
    document.getElementById("resultGender").textContent = gender;
    document.getElementById("resultMessage").textContent = message;

    form.reset();
  });
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
