import createPost from "./tools/buildPost.mjs";
import fetchPosts from "../api/fetchPosts.mjs";

export default async function createFeed() {

    const feed = document.querySelector('#feedContent');
    feed.innerHTML = '';

    const posts = await fetchPosts();
    console.log(posts);

    posts.forEach(post => {
        const postElement = createPost(post);
        feed.appendChild(postElement);
    });

};