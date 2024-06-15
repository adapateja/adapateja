const layers = document.querySelectorAll(".layer");
const container = document.querySelector(".container");
const nav = document.querySelector(".navigation");
const tabs = nav.querySelectorAll("ul li a");
const hamburger = document.querySelector(".hamburger");
let revealText1 = container.querySelector(".layer5 .testimonial h1");

// The column transition animation.
function collapse() {
    layers.forEach((layer) => {
        if (layer.classList.contains("active")) {
            layer.classList.remove("active");
        }
    });
    revealText1.classList.remove("reveal");
}

function home() {
    collapse();
    layers[0].classList.add("active");
}

function about() {
    collapse();
    layers[1].classList.add("active");
}

function services() {
    collapse();
    layers[2].classList.add("active");
}

function portfolio() {
    collapse();
    layers[3].classList.add("active");
}

function blog() {
    collapse();
    layers[4].classList.add("active");
    revealText1.classList.add("reveal");
}

function contact() {
    collapse();
    layers[5].classList.add("active");
}

// The hamburger animation:
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

// HOME
let content = document.querySelector(".content");

content.querySelectorAll("p")[1].innerHTML = content
    .querySelectorAll("p")[1]
    .textContent.replace(/\S/g, `<span>$&</span>`);


tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
    });
});


function playClickSound() {
    var clickSound = document.getElementById('click-sound');
    clickSound.play();
}
function playHoverSound() {
    var hoverSound = document.getElementById('hover-sound');
    hoverSound.play();
}

// Attach hover event to elements with class "w"
document.querySelectorAll('.w').forEach(function(element) {
    element.addEventListener('mouseenter', playHoverSound);
});
function playPageTurnSound() {
    var pageTurnSound = document.getElementById('page-turn-sound');
    pageTurnSound.play();
}
function handleClick(event) {
    // Prevent default behavior
    event.preventDefault();

    // Remove the active class from all links
    document.querySelectorAll('a').forEach(function(link) {
        link.classList.remove('active');
    });

    // Add the active class to the clicked link
    event.currentTarget.classList.add('active');

    // Implement additional functionality as needed
}
function playHoverSoundprojects() {
    var hoverSoundpro = document.getElementById('hover-sound-projects');
    hoverSoundpro.play();
}

// Attach hover event to elements with class "mix"
document.querySelectorAll('.mix').forEach(function(element) {
    element.addEventListener('mouseenter', playHoverSoundprojects);
});

function butplayClickSound() {
    var butclickSound = document.getElementById('but-click-sound');
    butclickSound.play();
}

// Attach click event to elements with class "but-click"
document.querySelectorAll('.but-click').forEach(function(element) {
    element.addEventListener('click', butplayClickSound);
});