// js for notification 

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";
    setTimeout(function () {
      notification.style.display = "none";
    }, 3000);
  }
  
  // Example usage
  showNotification("Dark Mode and ChatBot is Available...");
  