const apiUrl = "https://6792020bcf994cc680484678.mockapi.io/user";
const userForm = document.getElementById("userForm");
const userTableBody = document.querySelector("#userTable tbody");
const updateModal = document.getElementById("updateModal");
const updateForm = document.getElementById("updateForm");
let editUserId = null;

// Fetch and display all users
async function fetchUsers() {
  const response = await fetch(apiUrl);
  const users = await response.json();
  renderTable(users);
}

function renderTable(users) {
  userTableBody.innerHTML = "";
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.mobile}</td>
      <td>
        <button class="update-btn updbtn" data-id="${user.id}">Update</button>
        <button class="delete-btn delbtn" data-id="${user.id}">Delete</button>
      </td>
      <td><img src="${user.image || 'defaultImage.jpg'}" alt="User Image" /></td>
    `;
    userTableBody.appendChild(row);
  });
}
// Convert image to base64 string
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      } else {
        resolve(null);
      }
    });
  }

// Add a new user
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const imageFile = document.getElementById("image").files[0];
  const imageBase64  =await convertToBase64(imageFile)

  console.log('Image Base64:', imageBase64);
  const newUser = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    image: imageBase64,
  };

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  userForm.reset();
  fetchUsers();
});

// Open update modal
userTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("update-btn")) {
    editUserId = e.target.dataset.id;
    openUpdateModal(editUserId);
  } else if (e.target.classList.contains("delete-btn")) {
    const userId = e.target.dataset.id;
    deleteUser(userId);
  }
});

async function openUpdateModal(userId) {
  const response = await fetch(`${apiUrl}/${userId}`);
  const user = await response.json();
  document.getElementById("updateName").value = user.name;
  document.getElementById("updateEmail").value = user.email;
  document.getElementById("updateMobile").value = user.mobile;
  updateModal.style.display = "flex";
}

// Update user
updateForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const imageFile = document.getElementById("updateImage").files[0];
  const imageBase64 = imageFile ? await convertToBase64(imageFile) : null;
  const updatedUser = {
    name: document.getElementById("updateName").value,
    email: document.getElementById("updateEmail").value,
    mobile: document.getElementById("updateMobile").value,
  };

  await fetch(`${apiUrl}/${editUserId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUser),
  });

  updateModal.style.display = "none";
  fetchUsers();
});

// Delete user
async function deleteUser(userId) {
  await fetch(`${apiUrl}/${userId}`, {
    method: "DELETE",
  });
  fetchUsers();
}

// Close update modal
document.querySelector(".close").addEventListener("click", () => {
  updateModal.style.display = "none";
});

// Initial fetch
fetchUsers();