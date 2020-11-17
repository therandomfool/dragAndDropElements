const dragArea = document.querySelector(".wrapper");
new Sortable(dragArea, {
    animation: 90
});

// window.setInterval (BlinkIt, 500);
//         var color = "#ffffff";
//         function BlinkIt () {
//             var blink = document.getElementById ("blink");
//             color = (color == "#000000")? "#000000" : "#ffffff";
//             blink.style.color = color;
//         }