let arr = ["lightsalmon",
"salmon",
"darksalmon",
"lightcoral",
"coral",
"moccasin",
"peachpuff",
"palegoldenrod",
"khaki",
"lightgreen",
"palegreen",
"darkseagreen",
"lightcyan",
"aquamarine",
"paleturquoise",
"powderblue",
"lightblue",
"lightskyblue",
"skyblue",
"lightsteelblue",
"lavender",
"thistle",
"plum",
"pink",
"lightpink",
"wheat"
];
 
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColour() {
    let randomIndex = random(0, arr.length - 1);
    return arr[randomIndex];
}

document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll('.randomColour');

    links.forEach(function(link) {
        // Change background color on hover
        link.addEventListener('mouseenter', function() {
            link.style.backgroundColor = randomColour();
        });

        // Revert to transparent background color on mouse leave
        link.addEventListener('mouseleave', function() {
            link.style.backgroundColor = 'transparent';
        });
    });
});



/*

function randomColour() {
    // Select all elements with the class "randomColour"
    let elements = document.querySelectorAll('.randomColour');

    // Loop through each selected element
    elements.forEach(function(element) {
        let randomIndex = random(0, arr.length - 1);
        let randomColor = arr[randomIndex];
        element.style.backgroundColor = randomColor;
    });
}

// Call the randomColour function when the page loads
randomColour();

*/