import updatePost from "../../api/updatePost.mjs";
import createFeed from "../createFeed.mjs";
import updateCharacters from "../../eventListeners/updateCharacters.mjs";

export function buildUpdateForm(post, data) {

    const currentPost = post;
    currentPost.innerHTML = '';

    const form = document.createElement('form');
    form.id = 'updateForm';
    form.classList.add('flex', 'flex-col', 'items-end', 'w-full', 'p-5', 'gap-4');

    const postContainer = document.createElement('div');
    postContainer.classList.add('w-full', 'h-24', 'relative');

    const postContent = document.createElement('textarea');
    postContent.classList.add('h-24', 'rounded-lg', 'px-4', 'py-2', 'w-full', 'resize-none');
    postContent.id = 'updateContent';
    postContent.placeholder = 'What\'s the latest?';
    postContent.value = data.body;

    const postCounter = document.createElement('div');
    postCounter.classList.add('absolute', 'bottom-0', 'right-2');

    const postCounterText = document.createElement('p');
    postCounterText.classList.add('text-gray-600');
    const currentCount = data.body.length;
    postCounterText.innerHTML = `<span id="updateTextCount">${currentCount}</span>/120`;

    postCounter.append(postCounterText);
    postContainer.append(postContent, postCounter);

    const postButton = document.createElement('button');
    postButton.classList.add('bg-highlight', 'rounded-lg', 'h-10', 'sm:max-w-60', 'w-full');
    postButton.id = 'updatePostButton';
    postButton.type = 'submit';
    postButton.innerHTML = 'Update';

    if (data.body.length === 0) {
        postButton.disabled = true;
        postButton.classList.add('bg-gray-300');
    }

    form.append(postContainer, postButton);
    currentPost.appendChild(form);

    updateCharacters(postContent, 'updateTextCount');

    postContent.addEventListener('input', () => {
            
        const textLength = postContent.value.length;
        if (textLength > 0 ) {
            postButton.disabled = false;
            postButton.classList.remove('bg-gray-300');
        } else {
            postButton.disabled = true;
            postButton.classList.add('bg-gray-300');
    
        }
    });

    form.addEventListener('submit', async (event) => {

        event.preventDefault();

        const updatedData = {
            body: postContent.value
        };

        const updatedPost = await updatePost(updatedData, data.id);
        const currentURL = window.location.href;

        setTimeout(() => {
            if (currentURL.includes('post')) {
                location.reload();
            } else {
            createFeed();
            }
        }, 100);

    });
};

{/* <div class="w-full h-24 relative">
                            <textarea class="h-24 rounded-lg px-4 py-2 w-full resize-none" id="postContent" type="text" placeholder="What's the latest?"></textarea>
                            <div class="absolute bottom-0 right-2">
                                <p class="text-gray-600"><span id="postTextCount">0</span>/120</p>
                            </div> 
                        </div> */}








    // <div class="flex items-start gap-5 border-2 rounded-lg w-11/12 max-w-screen-sm p-4">
    //     <img class="h-20 hidden sm:block mt-5" src="/src/media/profile-image.png" alt="Profile image">
    //     <form id="postForm" class="flex flex-col items-end w-full p-5 gap-4" action="">
    //         <textarea class="h-20 rounded-lg px-4 py-2 w-full" id="postContent" type="text" placeholder="What's the latest?"></textarea> 
    //         <div id="postErrorContainer">
    //             <p class="hidden" id="postError">Something went wrong, try again!</p>
    //         </div>
    //         <button class="bg-highlight rounded-lg h-10 sm:max-w-60 w-full" id="newPostButton" type="submit">Post</button>
    //     </form>
    // </div>