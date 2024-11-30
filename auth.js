// auth.js

const auth = firebase.auth();

// Sign up user
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      window.location.replace('profile.html');
    })
    .catch(error => {
      console.error(error.message);
    });
});

// Login user
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      window.location.replace('profile.html');
    })
    .catch(error => {
      console.error(error.message);
    });
});
