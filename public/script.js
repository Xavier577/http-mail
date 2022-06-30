const linkCopyBox = document.getElementById("link-copy-box");
const emailBox = document.getElementById("email-box")
const linkCopyBtn = document.getElementById("link-copy-btn")

console.log(emailBox)


function getOrigin() {
    return window.location.origin;
}

const linkBoxPlaceholder = `${getOrigin()}/[email]`

const linkValueWatcher = (event) => {
    linkCopyBox.setAttribute("placeholder", `${origin}/${event.target.value}`)
}

// const toggleLinkCopied = (event) => {
//     event.target.classList.toggle("link-copy-icon-cnt")
//     event.target.classList.toggle("link-copy-success")
// }

document.addEventListener("DOMContentLoaded", () => {
    linkCopyBox.setAttribute("placeholder", linkBoxPlaceholder)
})

emailBox.addEventListener("change", linkValueWatcher)

// linkCopyBtn.addEventListener("click", toggleLinkCopied)

