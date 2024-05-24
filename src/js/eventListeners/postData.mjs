import newPost from '../api/newPost.mjs';
import createFeed from '../posts/createFeed.mjs';

export default function fetchPostData() {

    try {

    const form = document.querySelector('#postForm');
    const postBodyContent = document.querySelector('#postContent');
    const errorContainer = document.querySelector('#postErrorContainer');
    const submitButton = document.querySelector('#newPostButton');

    submitButton.disabled = true;
    postBodyContent.addEventListener('input', () => {

        if (postBodyContent.value.length > 0) {
            submitButton.disabled = false;
            submitButton.classList.remove('bg-gray-300');
        } else {
            submitButton.disabled = true;
            submitButton.classList.add('bg-gray-300');
        };
    });


    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const data = {
            title: 'quiply-post',
            body: postBodyContent.value,
            tags: ['quiplypost']
        };

        await newPost(data);
        form.reset();
        location.reload();

    });


    } catch (error) {
        console.log(error);
        errorContainer.classList.remove('hidden');
    };
};