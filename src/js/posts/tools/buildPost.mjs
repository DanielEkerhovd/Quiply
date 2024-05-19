import postDropdown from "../../eventListeners/postDropdown.mjs";
import postDelete from "../../eventListeners/postDelete.mjs";

export default function createPost(data) {

    //Counts the post index
    const postCount = document.querySelectorAll('article').length + 1;
    const postId = data.id;
    console.log(postCount, postId);

    //Fetch user from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user.name;

    //Fetch user that created post
    const postAuthor = data.author.name;

    const post = document.createElement('article');
    post.classList.add('flex', 'flex-col', 'gap-2');

    const postBio = document.createElement('div');
    postBio.classList.add('flex', 'items-end', 'gap-1');

    const postProfileImage = document.createElement('a');
    postProfileImage.href = '#';
    const postProfileImageElement = document.createElement('img');
    postProfileImageElement.classList.add('size-12', 'sm:hidden');
    postProfileImageElement.src = '/src/media/profile-image.png';
    postProfileImageElement.alt = '';
    postProfileImage.appendChild(postProfileImageElement);

    const postUsername = document.createElement('h2');
    postUsername.innerHTML = data.author.name;
    postBio.append(postProfileImage, postUsername);

    const postContent = document.createElement('div');
    postContent.classList.add('flex', 'items-center', 'gap-5', 'border-2', 'rounded-sm', 'p-4');

    const postImage = document.createElement('img');
    postImage.classList.add('h-16', 'hidden', 'sm:block');
    postImage.src = '/src/media/profile-image.png';
    postImage.alt = '';

    const postText = document.createElement('p');
    postText.innerHTML = data.body;

    postContent.append(postImage, postText);

    //Post stats
    const postStats = document.createElement('div');
    postStats.classList.add('flex', 'items-center', 'gap-2');

    //Post likes
    const postLikes = document.createElement('div');
    postLikes.classList.add('flex', 'items-center', 'gap-2');

    const postLikeButton = document.createElement('button');
    postLikeButton.id = 'likeButton';
    postLikeButton.classList.add('h-8', 'rounded-full');
    const postLikeButtonImage = document.createElement('img');
    postLikeButtonImage.classList.add('h-full');
    postLikeButtonImage.src = '/src/media/icons/heart-empty.png';
    postLikeButtonImage.alt = 'like button';
    postLikeButton.appendChild(postLikeButtonImage);

    const postLikeValue = document.createElement('p');
    postLikeValue.classList.add('font-lato');
    postLikeValue.id = 'likeButtonValue';
    postLikeValue.innerHTML = '0';
    
    postLikes.append(postLikeButton, postLikeValue);

    //Post comments
    const postComments = document.createElement('div');
    postComments.classList.add('flex', 'items-center', 'gap-2');

    const postCommentButton = document.createElement('button');
    postCommentButton.id = 'commentButton';
    postCommentButton.classList.add('h-8', 'rounded-full');
    const postCommentButtonImage = document.createElement('img');
    postCommentButtonImage.classList.add('h-full');
    postCommentButtonImage.src = '/src/media/icons/comment.png';
    postCommentButtonImage.alt = 'comment button';
    postCommentButton.appendChild(postCommentButtonImage);

    const postCommentValue = document.createElement('p');
    postCommentValue.classList.add('font-lato');
    postCommentValue.id = 'commentButtonValue';
    postCommentValue.innerHTML = '0';

    postComments.append(postCommentButton, postCommentValue);
    postStats.append(postLikes, postComments);

    //Post menu

    if (userName === postAuthor) {

    const postMenu = document.createElement('div');
    postMenu.classList.add('relative');

    const postMenuButton = document.createElement('button');
    postMenuButton.id = `postMenu${postCount}`;
    postMenuButton.classList.add('size-8', 'flex');
    postMenuButton.type = 'button';
    const postMenuButtonImage = document.createElement('img');
    postMenuButtonImage.src = '/src/media/icons/menu-dots.png';
    postMenuButtonImage.alt = 'Dropdown menu';
    postMenuButton.appendChild(postMenuButtonImage);

    const postMenuDropdown = document.createElement('div');
    postMenuDropdown.id = `postMenuDropdown${postCount}`;
    postMenuDropdown.classList.add('absolute', 'hidden');

    const postMenuDropdownList = document.createElement('ul');
    postMenuDropdownList.classList.add('bg-white', 'shadow-lg', 'rounded', 'border', 'py-2');

    const postMenuDropdownEdit = document.createElement('li');
    postMenuDropdownEdit.classList.add('px-4', 'py-2', 'hover:bg-gray-200', 'cursor-pointer');
    postMenuDropdownEdit.innerHTML = 'Edit';

    const postMenuDropdownDelete = document.createElement('li');
    postMenuDropdownDelete.classList.add('px-4', 'py-2', 'hover:bg-gray-200', 'cursor-pointer');
    postMenuDropdownDelete.innerHTML = 'Delete';
    const deleteButtonId = `deletePost${postCount}`
    postMenuDropdownDelete.id = deleteButtonId;

    postMenuDropdownList.append(postMenuDropdownEdit, postMenuDropdownDelete);
    postMenuDropdown.append(postMenuDropdownList);
    postMenu.append(postMenuButton, postMenuDropdown);
    postStats.append(postMenu);

    postDropdown(postMenuButton, postMenuDropdown);
    postDelete(postMenuDropdownDelete, postId);
    

    };

    post.append(postBio, postContent, postStats);

    return post;

}

{/* <div class="relative">
    <button id="postMenu" class="size-8 flex" type="button">
        <img src="/src/media/icons/menu-dots.png" alt="Dropdown menu">
    </button>
    <div id="postMenuDropdown" class="absolute hidden">
        <ul class="bg-white shadow-lg rounded border py-2">
            <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">Edit</li>
            <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">Delete</li>
        </ul>
    </div>
</div> */}

// <!-- <div class="flex flex-col gap-2">
//         <div class="flex items-end gap-1">
//             <a href="#"><img class="size-12 sm:hidden" src="/src/media/profile-image.png" alt=""></a>
//             <h2 class="">DanielEker</h2>
//         </div>
//         <div class="flex items-center gap-5 border-2 rounded-sm p-4">
//             <img class="h-16  hidden sm:block" src="/src/media/profile-image.png" alt="">
//             <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         </div>
//         <div class="flex items-center gap-2">
//             <div class="flex items-center gap-2">
//                 <button id="likeButton" class="h-8 rounded-full"><img class="h-full " src="/src/media/icons/heart-empty.png" alt="like button"></button>
//                 <p class="font-lato" id="likeButtonValue">200</p>
//             </div>
//             <div class="flex items-center gap-2">
//                 <button id="commentButton" class="h-8 rounded-full"><img class="h-full " src="/src/media/icons/comment.png" alt="like button"></button>
//                 <p class="font-lato" id="commentButtonValue">32</p>
//             </div>
//         </div>
//     </div> -->