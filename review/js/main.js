$(document).ready(function() {
    // Handle form submission
    $('form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        var searchQuery = $(this).find('input[type="search"]').val().trim(); // Get the search query

        console.log('Search query:', searchQuery);
        // You can handle the search query here, e.g., send it to a server
    });

    // Example of a click event on a navigation link
    $('nav a').on('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        var href = $(this).attr('href'); // Get the href attribute
        console.log('Navigation link clicked:', href);
        // You can handle the navigation here
    });
});
