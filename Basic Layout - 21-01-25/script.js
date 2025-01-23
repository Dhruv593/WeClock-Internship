document.getElementById("detailsForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();

  let isValid = true;

  const nameError = document.getElementById("nameError");
  if (name == "") {
    nameError.innerHTML = "Name is required";
    isValid = false;
  } else {
    nameError.innerHTML = "";
  }

  const emailError = document.getElementById("emailError");
  if (email == "") {
    emailError.innerHTML = "Email is required";
    isValid = false;
  } else {
    emailError.innerHTML = "";
  }

  const passwordError = document.getElementById("passwordError");
  if (password == "") {
    passwordError.innerHTML = "Password is required";
    isValid = false;
  } else {
    passwordError.innerHTML = "";
  }

  const userDetails = {
    name: name,
    email: email,
    password: password,
  };

  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  alert("User details saved successfully");
  this.reset();
});
