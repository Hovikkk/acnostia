// map
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.787706, lng: 43.837852 },
        zoom: 8
    });
}

// add activ class navbar
var header = document.getElementById("navbarCollapse");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        w3RemoveClass(current[0], " active");
        w3AddClass(this, " active");
    });
}
var pageURL = window.location.href;
var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('#') + 1);
var pathUrlShort = lastURLSegment.substr(0, lastURLSegment.length - 4);
localStorage.setItem("url", pathUrlShort);
switch (pathUrlShort) {
    case 'services':
        var temporary = header.getElementsByClassName("services");
        var delHome = header.getElementsByClassName("home");
        delHome[0].classList.remove("active");
        temporary[0].className += " active";
        break;
    case 'about':
        var temporary = header.getElementsByClassName("about");
        var delHome = header.getElementsByClassName("home");
        delHome[0].classList.remove("active");
        temporary[0].className += " active";
        break;
    case 'work':
        var temporary = header.getElementsByClassName("work");
        var delHome = header.getElementsByClassName("home");
        delHome[0].classList.remove("active");
        temporary[0].className += " active";
        break;
    case 'contacts':
        var temporary = header.getElementsByClassName("contacts");
        var delHome = header.getElementsByClassName("home");
        delHome[0].classList.remove("active");
        temporary[0].className += " active";
        break;
}

function logofun() {
    var temporary = header.getElementsByClassName("home");
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    temporary[0].className += " active";
}

// form
var nameInput = document.getElementById('name');
var surnameInput = document.getElementById('surname');
var textarea = document.getElementById('textarea');
document.querySelector('form.messageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nameInput.value + " " + surnameInput.value + '\n' + textarea.value);
    nameInput.value = '';
    surnameInput.value = '';
    textarea.value = ''
});


// add activ class about
var about = document.getElementById("aboutBlock");
var btnsAbout = about.getElementsByClassName("aBlock");
for (var j = 0; j < btnsAbout.length; j++) {
    btnsAbout[j].addEventListener("click", function() {
        var current = document.getElementsByClassName("activeAbout");
        w3RemoveClass(current[0], " activeAbout");
        w3AddClass(this, " activeAbout")
    });
}



//galerry


filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("workBlockFloat");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// add + button activ class work

var work = document.getElementById("myBtnContainer");
var btnsWork = work.getElementsByClassName("btn");
for (var j = 0; j < btnsWork.length; j++) {
    btnsWork[j].addEventListener("click", function() {
        var current = document.getElementsByClassName("activeWork");
        w3RemoveClass(current[0], " activeWork")
        w3AddClass(this, " activeWork")
    });
}

function addButton(e) {
    var element = document.getElementsByClassName("clickWork");
    for (var j = 0; j < element.length; j++) {
        w3RemoveClass(element[j], "showButton")
    }
    for (var i = 0; i < element.length; i++) {
        if (i == e) {
            w3AddClass(element[i], "showButton")
        }
    }
}