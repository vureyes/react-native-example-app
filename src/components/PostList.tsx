import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, DataTable, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { deletePostAction, updatePostsAction } from '../redux/actions/postActions';

const mapStateToProps = (state: any) => ({ posts: state.posts });

const mapDispatchToProps = (dispatch: any) => ({
  updatePosts: (posts: any) => dispatch(updatePostsAction(posts)),
  deletePost: (post: any) => dispatch(deletePostAction(post)),
});

const ConnectedPostList = ({ posts, deletePost, updatePosts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:3003/', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        updatePosts(data.posts);
      });
  }, [updatePosts]);

  const handleDelete = (post) => {
    fetch(`http://localhost:3003/removePost?removeId=${post.id}`, { method: 'POST' })
      .then(deletePost(post));
  };

  useEffect(() => {
    if (filter === '') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.name.includes(filter)));
    }
  }, [filter, posts]);

  return (
    <View style={{ flex:1, alignSelf: 'center', justifyContent: 'center', width: '90%' }}>
      <TextInput value={filter} onChangeText={setFilter} label="Filtro de nombre" mode="outlined" />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nombre</DataTable.Title>
          <DataTable.Title>Descripción</DataTable.Title>
          <DataTable.Title>Acción</DataTable.Title>
        </DataTable.Header>
        {filteredPosts.map((post: any) => (
          <DataTable.Row key={post.id}>
            <DataTable.Cell>{post.name}</DataTable.Cell>
            <DataTable.Cell>{post.description}</DataTable.Cell>
            <DataTable.Cell><Button style={{ flex: 1 }} mode="contained" onPress={() => handleDelete(post)}>Eliminar</Button></DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

const PostList = connect(mapStateToProps, mapDispatchToProps)(ConnectedPostList);

export default PostList;
