export const baseURL = 'https://api.noroff.dev/api/v1/social/'

const quiplyTag = 'quiplypost';

export const apiPaths = {
   login: 'auth/login',
   register: 'auth/register',
   posts: 'posts',
   // GET: Fetch all posts
   // POST: Create a new post
   // PUT: Update a post, requires id (posts/id)
   // DELETE: Delete a post, requires id (posts/id)
   // Filtering: GET and use of tag. Example: posts?_tag=<tag>

   postFilter: `_tag=${quiplyTag}`,
   postAuthur: `_author=true`
};