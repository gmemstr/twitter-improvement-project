// Checking page title
if (document.title.indexOf("Twitter") != -1) {
    //Creating Elements
    var btn = document.createElement("button")
    var t = document.createTextNode("Night Mode");
    btn.appendChild(t);
    btn.addEventListener("click", toggleNight);
    btn.className = "nightModeButton";
    card = document.getElementById('global-actions');
    //Appending to DOM 
    card.appendChild(btn);
}

function toggleNight() {
    document.body.classList.toggle("night-mode");
}

