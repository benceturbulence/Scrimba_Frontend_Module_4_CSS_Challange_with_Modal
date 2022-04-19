const modalEl = document.getElementById("popup")
const outer_containerEl = document.getElementById("outer_container")
const closeModal = document.getElementById("close-btn")
const emailEl = document.getElementById("email")
const openModal = document.getElementById("open-btn")

function subscribeModal(){
    outer_containerEl.classList.toggle("blur_filter")
    modalEl.style.display = "block"
}

setTimeout(subscribeModal, 5000)
console.log("started")

closeModal.addEventListener("click", function (){
    outer_containerEl.classList.remove("blur_filter")
    modalEl.style.display = "none"
})

openModal.addEventListener("click", subscribeModal)

let emails = []


console.log(emailEl.value)