function showDetails(title, description) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerText = description;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
