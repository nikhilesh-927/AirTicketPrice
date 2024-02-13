function calculateDistance() {
    var location1 = document.getElementById("location1").value;
    var location2 = document.getElementById("location2").value;
    var currencyName = "INR";
    // Perform distance calculation logic here.
    // Here's a sample using a switch statement for simplicity.
    var distance;
    switch (location1) {
        case "Mumbai":
            switch (location2) {
                case "Mumbai":
                    distance = 0;
                    break;
                case "Bengaluru":
                    distance = 3444;
                    break;
                case "Lucknow":
                    distance = 6716;
                    break;
            }
            break;
        case "Bengaluru":
            switch (location2) {
                case "Mumbai":
                    distance = 3444;
                    break;
                case "Bengaluru":
                    distance = 0;
                    break;
                case "Lucknow":
                    distance = 5952;
                    break;
            }
            break;
        case "Lucknow":
            switch (location2) {
                case "Mumbai":
                    distance = 6716;
                    break;
                case "Bengaluru":
                    distance = 5952;
                    break;
                case "Lucknow":
                    distance = 0;
                    break;
            }
            break;
    }

    var linka = document.getElementById("usd");
    if (linka.href === window.location.href) {
        distance = distance / 83;
        currencyName = "USD";
    }

    var linkb = document.getElementById("inr");
    if (linkb.href === window.location.href) {
        distance = distance;
        currencyName = "INR";
    }

    var linkc = document.getElementById("pound");
    if (linkc.href === window.location.href) {
        distance = distance / 104;
        currencyName = "GDB";
    }

    var linkd = document.getElementById("dinar");
    if (linkd.href === window.location.href) {
        distance = distance / 269;
        currencyName = "KWD";
    }

    document.getElementById("result").innerHTML = "Ticket price from " + location1 + " to " + location2 + " is " + currencyName + " " + distance;

}


function changeColor(link) {
    link.style.backgroundColor = "goldenrod";// Change the color to red
    link.style.color = "black";
    link.onclick = null; // Remove the onclick attribute to prevent further color changes when clicked again

    // Reset the color of all other links
    var allLinks = document.getElementsByTagName("a");
    for (var i = 0; i < allLinks.length; i++) {
        if (allLinks[i] !== link) {
            allLinks[i].style.backgroundColor = ""; // Remove the explicit color
            allLinks[i].onclick = function () { // Add back the click event listener to other links
                changeColor(this);
            }
        }
    }
}