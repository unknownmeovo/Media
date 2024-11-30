// localstorage.js

function getUserPreferences() {
    return JSON.parse(localStorage.getItem('userPreferences'));
  }
  
  function setUserPreferences(preferences) {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }
  