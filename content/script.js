// Main TIP script that performs all the
// neccesary JS functions required, mostly
// toggling nightMode and such.
//
// Setup basic buttons and check whether
// or not the user has night mode enabled
// through chrome.storage.sync
window.onload = setup;

function setup() {

    
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
    checkIfNightTime();
}

// Toggle whether or not night mode is enabled,
// currently sets a body class which is then
// handled by the CSS (which I need to do a
// lot of work on :P)
function toggleNight() {
    document.body.classList.toggle("night-mode");
    if (hasClass(document.body, "night-mode")) {
        chrome.storage.sync.set({ "nightMode": true });
    } else {
        chrome.storage.sync.set({ "nightMode": false })
    }
    chrome.storage.sync.get("nightMode", function (obj) {
        console.log("nightMode: " + obj.nightMode)
    });
}

// From Stackoverflow, checks whether or not 
// element contains a class. Credit: Felix Kling
// https://stackoverflow.com/questions/5898656/test-if-an-element-contains-a-class
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

// Load nightMode from chrome.storage.sync and 
// check if nightMode is enabled. If yes, toggle
// as twitter does not load with it enabled by
// default (bug or feature, unsure what to label this as)
function checkIfNightTime() {
    chrome.storage.sync.get("nightMode", function (obj) {
        if (obj.nightMode == true) {
            toggleNight();
        } else {
            console.log("Not night time");
        }
    });
    /*
     Really hacky way of getting around Twitter's event
     handlers overriding my methods. Checks every second 
     if the night-mode body class has been disabled or not.
    */
    setInterval(function(){
    // console.log("checking night again");

    chrome.storage.sync.get("nightMode", function (obj) {
        // console.log(hasClass(document.body,"night-mode"));
        if (obj.nightMode && !hasClass(document.body, "night-mode")){
            // console.log("night mode true, body hasClass false");
            document.body.classList.toggle("night-mode");
        } 
    });
    }, 1000);
}