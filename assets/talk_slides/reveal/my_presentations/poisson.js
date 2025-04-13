
// Function to draw the initial Poisson points in a default color (e.g., red)
function drawInitialPoissonPoints(canvasId, intensity) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Calculate the number of points based on the intensity and area
    const area = width * height;
    const numberOfPoints = Math.floor(intensity * area);

    // Store the points for later use
    let points = [];

    // Clear the canvas
    context.clearRect(0, 0, width, height);

    // Generate points
    for (let i = 0; i < numberOfPoints; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        points.push({ x, y });

        // Draw the point in red
        context.fillStyle = 'red';
        context.beginPath();
        context.arc(x, y, 2, 0, 2 * Math.PI); // 2 is the radius of the point
        context.fill();
    }

    return points;
}

// Function to update the colors of the points to either red or yellow
function updatePointColors(canvasId, points) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Update colors for each point
    points.forEach(point => {
        // Randomly assign a color to each point: red or yellow
        const color = Math.random() < 0.5 ? 'red' : 'yellow';

        // Draw the point with the new color
        context.fillStyle = color;
        context.beginPath();
        context.arc(point.x, point.y, 2, 0, 2 * Math.PI); // 2 is the radius of the point
        context.fill();
    });
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    const points = drawInitialPoissonPoints('poissonCanvas', 0.0001);

    // Update the colors of the points when the button is clicked
    document.getElementById('updateColors').addEventListener('click', () => {
        updatePointColors('poissonCanvas', points);
    });

window.addEventListener("mousedown", handleClick, false);
window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);

function handleClick(e) {
	e.preventDefault();
	if(e.button === 0) updatePointColors('poissonCanvas', points); 
	if(e.button === 2) Reveal.prev(); 
}
});