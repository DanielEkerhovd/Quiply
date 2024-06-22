import createPost from "../posts/tools/buildPost.mjs";

export default function postSearch(data) {

    const searchForm = document.querySelector('#searchForm');
    const searchInput = document.querySelector('#searchInput');

    searchForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const searchQuery = searchInput.value;

        const feed = document.querySelector('#feedContent');
        feed.innerHTML = '';

        //This checks for the search query in the post body and author name
        const searchResults = data.filter(post => {
            return post.body.toLowerCase().includes(searchQuery.toLowerCase()) || post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
        });

        searchResults.forEach(post => {
            const postElement = createPost(post);
            feed.appendChild(postElement);
        });
    });
}