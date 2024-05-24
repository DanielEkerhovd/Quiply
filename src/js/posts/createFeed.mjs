import createPost from "./tools/buildPost.mjs";
import fetchPosts from "../api/fetchPosts.mjs";

export default async function createFeed(container = '#feedContent') {

    const feed = document.querySelector(container);
    feed.innerHTML = '';

    const posts = await fetchPosts();

    posts.forEach(post => {
        const postElement = createPost(post);
        feed.appendChild(postElement);
    });

};