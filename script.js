const openChat = document.getElementById("openChat");
const modal = document.getElementById("chatModal");
const closeChat = document.getElementById("closeChat");

openChat.onclick = () => {
  modal.style.display = "block";
};

closeChat.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
