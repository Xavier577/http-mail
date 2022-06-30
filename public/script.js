const linkCopyArea = document.getElementById("link-copy-area");
const emailBox = document.getElementById("email-box")
const linkCopyBtn = document.getElementById("link-copy-btn")
const copyIcon = document.getElementById("copy-icon")


function getOrigin() {
    return window.location.origin.trim();
}

function writeLink(event) {
    linkCopyArea.innerText = `${getOrigin()}/${event.target.value}`
}

function copyToClipboard(event) {
    navigator.clipboard.writeText(linkCopyArea.innerText)
    copyAnimation()
}

function copyAnimation() {
    copyIcon.src = "/assets/checked.gif"
    setTimeout(() => {
        copyIcon.src = "/assets/copy-icon.png"
    }, 1000)
}

document.addEventListener("DOMContentLoaded", () => {
    const linkBoxPlaceholder = `${getOrigin()}/[email]`
    linkCopyArea.innerText = linkBoxPlaceholder
})

emailBox.addEventListener("keyup", writeLink)

linkCopyBtn.addEventListener("click", copyToClipboard)

