const postReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_POSTS':
      return { posts: action.payload };
    case 'ADD_POST':
      return { posts: state.posts.concat(action.payload) };
    case 'DELETE_POST':
      return { posts: state.posts.filter((post) => post.name !== action.payload.name) };
    default:
      return state;
  }
};

export default postReducer;
