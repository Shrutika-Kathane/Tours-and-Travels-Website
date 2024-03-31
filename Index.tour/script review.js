document.getElementById('review-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from form
    var username = document.getElementById('username').value;
    var review = document.getElementById('review').value;
    var profileImage = document.getElementById('profile-image').files[0];


    var reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
    <div class="user-info">
      <img src="${profileImage ? URL.createObjectURL(profileImage) : 'default-user.jpg'}" alt="${username}">
      <p>${username}</p>
    </div>
    <p class="review-text">${review}</p>`;

    // Add new review to reviews section
    document.querySelector('.reviews').appendChild(reviewElement);


    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('review').value = '';
    document.getElementById('profile-image').value = ''; // Reset file input

    // Reset image preview
    if (profileImage) {
        URL.revokeObjectURL(profileImage);
    }
});