const API_URL = "http://localhost:5000/api/users";

async function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  loadUsers();
}

async function loadUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();

  const list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement("li");
    li.innerText = `${user.name} - ${user.email}`;
    list.appendChild(li);
  });
}

loadUsers();
