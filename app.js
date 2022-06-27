const notificationBtn = document.querySelector(".notification-btn")
const modalBg = document.querySelector(".modal-bg-dark")
const modalClose = document.querySelector(".modal-close")


notificationBtn.addEventListener("click", function() {
    modalBg.classList.remove("hidden")
})
modalClose.addEventListener("click", function(){
    modalBg.classList.add("hidden")
})
document.addEventListener("click", function(){
    console.log(e);
})

document.addEventListener("keydown", function(e){
    if (e.key == "Escape") {
        modalBg.classList.add("hidden")
    }
})

document.addEventListener("click", function(e){
    if(e.target.classList == "modal-bg-dark") {
        modalBg.classList.add("hidden")
    }
})
