
function calculateLove() {
    var random = Math.floor(Math.random() * 100) + 1;
    var p = document.createElement("p");
    var text = document.createTextNode(random + "%");

    // Clear existing content in #lovePercentage before appending the new result
    var lovePercentageElement = document.getElementById("lovePercentage");
    lovePercentageElement.innerHTML = "";  // Clear previous percentage

    p.appendChild(text);
    lovePercentageElement.appendChild(p);
}
