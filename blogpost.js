// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search Functionality
const searchPosts = debounce(function() {
    let input = document.getElementById('search').value;
    console.log('Searching for:', input);
    // Backend search implementation needed
}, 300);

document.getElementById('search').addEventListener('input', searchPosts);

// Comment Submission
function submitComment() {
    let comment = document.querySelector('.comments textarea').value;
    if (comment) {
        let commentList = document.getElementById('comment-list');
        let commentDiv = document.createElement('div');
        commentDiv.textContent = comment;
        commentList.appendChild(commentDiv);
        document.querySelector('.comments textarea').value = '';
    }
}

// Toggle Dropdown Menu
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scroll for Navigation (Event Delegation)
document.querySelector('.nav-links').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        // Close dropdown on mobile after clicking
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        }
    }
});