import dateFormat from "../utilities/dateFormat.mjs";
import todaysDate from "../utilities/todaysDate.mjs";
import createPost from "../posts/tools/buildPost.mjs";


export default function postFilter(data) {

    const feed = document.querySelector('#feedContent');
    const filterInput = document.querySelector('#filterFormSelect');

    filterInput.addEventListener('change', () => {

        const filterValue = filterInput.value;
        const allPosts = data;

        switch(filterValue){

            case 'newest':

                feed.innerHTML = '';

                allPosts.forEach(post => {
                    const postElement = createPost(post);
                    feed.appendChild(postElement);
                });

                break;

            case 'today':
                feed.innerHTML = '';

                const today = todaysDate();
                const filteredByDate = [];

                allPosts.forEach(post => {
                    const postDate = dateFormat(post.updated);
                    if(postDate === today){
                        filteredByDate.push(post);
                    }
                });

                filteredByDate.sort(() => Math.random() - 0.5);
                
                filteredByDate.forEach(post => {
                    const postElement = createPost(post);
                    feed.appendChild(postElement);
                });
            break;

            case 'oldest':

                feed.innerHTML = '';

                const sortedByDate = [...allPosts].sort((a, b) => new Date(a.updated) - new Date(b.updated));

                sortedByDate.forEach(post => {
                    const postElement = createPost(post);
                    feed.appendChild(postElement);
                });

            break;
        };
    });
};