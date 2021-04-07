import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { addPostAction } from '../redux/actions/postActions';

function mapDispatchToProps(dispatch) {
  return {
    addPost: newPost => dispatch(addPostAction(newPost))
  };
}

const ConnectedForm = ({ addPost }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    fetch(`http://localhost:3003/addPost?name=${name}&description=${description}`, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        addPost(data.post);
        setName('');
        setDescription('');
      });
  };

  return (
    <View style={{ flex: 1, alignSelf: 'center', width: '90%' }}>
      <TextInput value={name} mode='outlined' onChangeText={setName} label='Nombre' />
      <TextInput value={description} mode='outlined' onChangeText={setDescription} label='Description' />
      <Button mode='contained' onPress={handleSubmit}>Crear</Button>
    </View>
  );
};

const PostForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default PostForm;