export const updatePostsAction = (posts) => ({
  type: 'UPDATE_POSTS',
  payload: posts,
});

export const addPostAction = (post) => ({
  type: 'ADD_POST',
  payload: post,
});

export const deletePostAction = (post) => ({
  type: 'DELETE_POST',
  payload: post,
});
