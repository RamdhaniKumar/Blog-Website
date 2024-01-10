document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('blog-posts');
    const postForm = document.getElementById('post-form');

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            const titleElement = document.createElement('h2');
            titleElement.textContent = title;

            const contentElement = document.createElement('p');
            contentElement.textContent = content;

            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);

            blogPostsContainer.appendChild(postElement);

            // Clear the form fields after posting
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
        } else {
            alert('Please fill in both title and content fields.');
        }
    });
});