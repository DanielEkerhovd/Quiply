import deletePost from "../api/deletePost.mjs";
import { apiPaths, baseURL } from "../api/apiPaths.mjs";
import createFeed from "../posts/createFeed.mjs";

export default function postDelete(button, id) {

    const posts = apiPaths.posts;

    button.addEventListener('click', async (event) => {
        event.preventDefault();

        deletePost(baseURL + posts, id);
        setTimeout(() => {
            createFeed();
        }, 200);

    });

}