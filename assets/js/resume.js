function expandCV() {
    var frame = document.querySelector('.cv-frame');
    if (frame.style.width === '300px') {
        frame.style.width = '100%'; // Expand to full width
        frame.style.height = 'auto'; // Adjust height automatically
        document.querySelector('.cv-summary').style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    } else {
        frame.style.width = '300px'; // Collapse to original size
        frame.style.height = '400px';
    }
}

