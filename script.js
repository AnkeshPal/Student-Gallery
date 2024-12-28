document.getElementById('home-btn').addEventListener('click', function() {
    // Code to handle Home button click
});

document.getElementById('templates-btn').addEventListener('click', function() {
    // Code to handle Templates button click
});

document.getElementById('contact-btn').addEventListener('click', function() {
    // Code to handle Contact button click
});

document.getElementById('download1').addEventListener('click', function() {
    // Code to handle Download Template 1 button click
    // Add further download logic here
});

document.getElementById('download2').addEventListener('click', function() {
    // Code to handle Download Template 2 button click
    // Add further download logic here
});

document.getElementById('download3').addEventListener('click', function() {
    // Code to handle Download Template 3 button click
    // Add further download logic here
});
document.getElementById('download-pushpa2').addEventListener('click', function() {
    // Assuming "Pushpa 2" is a downloadable resource
    const link = document.createElement('a');
    link.href ="Movies/Pushpa-2.The.Rule.2024.720p"; // Change this path to the actual file location
    link.download = 'Pushpa2.zip';
    link.click();
});
