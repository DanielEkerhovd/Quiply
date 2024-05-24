import fetchID from "./fetchID.mjs";
import fetchSinglePost from "../api/fetchSinglePost.mjs";
import buildPost from "./tools/buildPost.mjs";

export default async function createSinglePost() {

    const id = fetchID();
    const post = await fetchSinglePost(id);
    const postElement = buildPost(post, true);
    const container = document.querySelector('#postContent');
    console.log(container);
    container.appendChild(postElement);

};
