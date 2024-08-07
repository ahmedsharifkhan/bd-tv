document.addEventListener('DOMContentLoaded', function () {
    const pagination = document.getElementById('pagination');
    if (pagination) {
        pagination.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                loadPosts(event.target.href);
            }
        });
    }

    function loadPosts(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                
                const newPostsContainer = doc.querySelector('#posts-container');
                const newPagination = doc.querySelector('#pagination');

                document.querySelector('#posts-container').innerHTML = newPostsContainer.innerHTML;
                document.querySelector('#pagination').innerHTML = newPagination.innerHTML;
            })
            .catch(error => console.warn('Error loading posts:', error));
    }
});
