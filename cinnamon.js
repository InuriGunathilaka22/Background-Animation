document.addEventListener("DOMContentLoaded", function () {
    const destinationSelect = document.getElementById("destination");
    const destinationContainers = document.querySelectorAll(".destination");

    // Function to show/hide destination based on selection
    function updateDestinationDisplay() {
        const selectedDestination = destinationSelect.value;

        destinationContainers.forEach((container) => {
            if (container.id === selectedDestination) {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
    }

    // Initial call to update the display based on the default selection
    updateDestinationDisplay();

    // Event listener to update display when selection changes
    destinationSelect.addEventListener("change", updateDestinationDisplay);
});
