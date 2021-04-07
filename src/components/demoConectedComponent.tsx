import React  from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { deletePostAction   } from '../redux/actions/postActions';

const mapStateToProps = (state: any) => ({ posts: state.posts });

const mapDispatchToProps = (dispatch: any) => ({
  deletePost: (post: any) => dispatch(deletePostAction(post)),
});

const ConnectedPostList = ({ posts, deletePost }) => {
  return (
    <View style={{ flex:1, alignSelf: 'center', justifyContent: 'center', width: '90%' }}>
      <Button>Botón</Button>
    </View>
  );
};

const PostList = connect(mapStateToProps, mapDispatchToProps)(ConnectedPostList);

export default PostList;
