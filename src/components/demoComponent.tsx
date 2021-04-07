import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';

const CustomButton = (props: { title: string, color: string }) => {

  const { title, color } = props;
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    console.log('Cambió el titulo!')
  }, [title])

  const handlePress = () => {
    console.log('Hola!');
    setPressed(true);
  };

  return (
    <Button title={title} color={color} onPress={handlePress} disabled={pressed} />
  );
}