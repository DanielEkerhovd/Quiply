import createPost from "../posts/tools/buildPost.mjs";

export default function postSearch(data) {

    const searchForm = document.querySelector('#searchForm');
    const searchInput = document.querySelector('#searchInput');

    searchForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const searchQuery = searchInput.value;

        const feed = document.querySelector('#feedContent');
        feed.innerHTML = '';

        //Filter objects from data with the search query in the body and create a new array
        const searchResults = data.filter(post => post.body.includes(searchQuery));

        //Create feed with the search results
        searchResults.forEach(post => {
            const postElement = createPost(post);
            feed.appendChild(postElement);
        });

    });

}