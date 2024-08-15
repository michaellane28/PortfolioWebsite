let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function randomizeGlow() {
    let icons = document.querySelectorAll('.banner .row i');

    icons.forEach(icon => {
        if (Math.random() < 0.2) {
            icon.classList.add('glow'); // Always add glow class
            setTimeout(() => {
                icon.classList.remove('glow'); // Remove glow class after a delay
            }, 4000); // Adjust delay (milliseconds) for the transition effect
        }
    });
}

setInterval(randomizeGlow, 4000); // Adjust interval (milliseconds) as desired

// Load icons from external file
function loadIcons() {
    fetch('icons.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('icons-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading icons:', error));
}

// Call the function to load icons
loadIcons();