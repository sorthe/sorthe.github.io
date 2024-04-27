$(document).ready(function() {
    $('.randomColour').hover(
        function() {
            $(this).css('background-color', randomColour());
        },
        function() {
            $(this).css('background-color', 'transparent');
        }
    );

    // Function to generate a random color
    function randomColour() {
        let arr = [
            "darkseagreen",
            "khaki",
            "lavender",
            "lightblue",
            "lightcoral",
            "lightgreen",
            "lightpink",
            "lightsalmon",
            "lightskyblue",
            "lightsteelblue",
            "mediumaquamarine",
            "palegoldenrod",
            "paleturquoise",
            "palevioletred",
            "peachpuff",
            "pink",
            "plum",
            "powderblue",
            "skyblue",
            "thistle"
        ];
        return arr[Math.floor(Math.random() * arr.length)];
    }
});