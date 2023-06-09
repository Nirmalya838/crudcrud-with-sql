// Fetch and display users
fetch('/api/read')
  .then(response => response.json())
  .then(users => {
    const usersList = document.getElementById('users');
    users.forEach(user => {
      const userItem = document.createElement('li');
      userItem.innerHTML = `
        <strong>Name:</strong> ${user.name}, 
        <strong>Email:</strong> ${user.email}
        <button onclick="editUser(${user.id})">Edit</button>
        <button onclick="deleteUser(${user.id})">Delete</button>
      `;
      usersList.appendChild(userItem);
    });
  })
  .catch(error => console.log(error));

function editUser(userId) {
  axios.get(`/api/read/${userId}`)
    .then(response => {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      name.value = response.data.name;
      email.value = response.data.email;

      const btn = document.getElementById('update');
      btn.addEventListener('click', function(event) {
        event.preventDefault();

        const updatedData = {
          name: name.value,
          email: email.value
        };

        axios.put(`/api/update/${userId}`, updatedData)
          .then(response => {
            console.log(response);
            location.reload();
          })
          .catch(error => console.log(error));
      });
    })
    .catch(error => console.log(error));
}

function deleteUser(userId) {
  axios.delete(`/api/delete/${userId}`)
    .then(response => {
      console.log(response);
      location.reload();
    })
    .catch(error => console.log(error));
}

