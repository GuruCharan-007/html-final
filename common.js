function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

function showToast(message) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `✅ <span>${message}</span>`;
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 100);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

function increaseFont() {
  let size = parseInt(localStorage.getItem("fontSize")) || 16;
  size++;
  document.body.style.fontSize = size + "px";
  localStorage.setItem("fontSize", size);
}

function decreaseFont() {
  let size = parseInt(localStorage.getItem("fontSize")) || 16;
  size--;
  document.body.style.fontSize = size + "px";
  localStorage.setItem("fontSize", size);
}

window.onload = function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
  let size = localStorage.getItem("fontSize");
  if (size) {
    document.body.style.fontSize = size + "px";
  }
};
