import deletePost from "../api/deletePost.mjs";
import { apiPaths, baseURL } from "../api/apiPaths.mjs";
import createFeed from "../posts/createFeed.mjs";

export default function postDelete(button, id) {

    //Current url

    const posts = apiPaths.posts;

    button.addEventListener('click', async (event) => {
        event.preventDefault();

        const currentURL = window.location.href;

        deletePost(baseURL + posts, id);
        setTimeout(() => {
            if (currentURL.includes('post')) {

                //Go back to feed
                window.location.href = '/feed';
            } else {
                createFeed();
            }
        }, 200);

    });

}