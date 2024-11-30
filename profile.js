// profile.js

const user = firebase.auth().currentUser;

document.getElementById('user-email').textContent = user.email;

document.getElementById('logout-btn').addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      window.location.replace('index.html');
    })
    .catch(error => {
      console.error('Logout failed', error);
    });
});

// Add function to edit profile here (e.g., update email, bio, etc.)
