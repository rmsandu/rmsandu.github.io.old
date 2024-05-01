document.addEventListener('DOMContentLoaded', function() {
    var jobTitles = document.querySelectorAll('.job-title');

    jobTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var description = this.nextElementSibling;

            // Toggle the display property
            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });
});
