const loginBtn = document.getElementById("loginBtn");
const userMenu = document.getElementById("userMenu");
const logoutBtn = document.getElementById("logoutBtn");

const modal = document.getElementById("authModal");
const closeBtn = document.querySelector(".close");
const authBtn = document.getElementById("authBtn");
const toggleAuth = document.getElementById("toggleAuth");
const authTitle = document.getElementById("authTitle");
const nameInput = document.getElementById("name");
const welcomeUser = document.getElementById("welcomeUser");

let isSignup = false;



loginBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});



toggleAuth.addEventListener("click", () => {
  isSignup = !isSignup;

  authTitle.innerText = isSignup ? "Sign Up" : "Login";
  authBtn.innerText = isSignup ? "Sign Up" : "Login";
  toggleAuth.innerText = isSignup ? "Login" : "Sign up";
  nameInput.style.display = isSignup ? "block" : "none";
});



authBtn.addEventListener("click", () => {
  const nameValue = nameInput.value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const passwordValue = document.getElementById("password").value.trim();

  if (!emailValue || !passwordValue || (isSignup && !nameValue)) {
    alert("Please fill all fields");
    return;
  }

  if (isSignup) {
    signup(nameValue, emailValue, passwordValue);
  } else {
    login(emailValue, passwordValue);
  }
});



function signup(name, email, password) {
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  isSignup = false;
  nameInput.style.display = "none";
  authTitle.innerText = "Login";
  authBtn.innerText = "Login";
}



function login(email, password) {
  if (
    email === localStorage.getItem("userEmail") &&
    password === localStorage.getItem("userPassword")
  ) {
    localStorage.setItem("isLoggedIn", "true");
    modal.style.display = "none";
    updateNavbar();
  } else {
    alert("Invalid email or password");
  }
}



logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("isLoggedIn");
  updateNavbar();
});



function updateNavbar() {
  if (localStorage.getItem("isLoggedIn") === "true") {
    loginBtn.style.display = "none";
    userMenu.style.display = "inline-block";
    welcomeUser.innerText = `Hi, ${localStorage.getItem("userName")}`;
  } else {
    loginBtn.style.display = "inline";
    userMenu.style.display = "none";
  }
}

updateNavbar();

