document.addEventListener('DOMContentLoaded', function () {
    // Fetch user data from the API
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => {
            // Check if data contains the 'data' property
            if (data.hasOwnProperty('data')) {
                // Display user data in the HTML
                displayUserData(data.data);
            }
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to display user data in the HTML
    function displayUserData(users) {
        const userDataContainer = document.getElementById('userData');

        // Create HTML elements to display user data
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>Name:</strong> ${user.first_name} ${user.last_name}<br>
                                 <strong>Email:</strong> ${user.email}<br>
                                 <img src="${user.avatar}" alt="User Avatar" width="100"><br><br>`;
            userList.appendChild(listItem);
        });

        // Append the user list to the container
        userDataContainer.appendChild(userList);
    }
});