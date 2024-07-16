const shareOptions = document.querySelector(".share-options")
const shareBtn = document.getElementById("share-btn")

function toggle(){
    shareOptions.classList.toggle("active")
}

shareBtn.addEventListener("click", toggle)