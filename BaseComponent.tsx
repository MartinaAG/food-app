import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {Text} from 'react-native';

interface MessageProps {
  message: string;
}

const BaseComponent = (props: MessageProps) => {
  const [search, setSearch] = useState<string>('');

  const onChange = (text: string): void => {
    setSearch(text);
    return;
  };

  return (
    <>
      {/* <SearchBar
        placeholder="Type Here..."
        onChangeText={onChange}
        value={search}
      /> */}
      {/* <Text>{search}</Text> */}
      <Text>{props.message}</Text>
    </>
  );
};

export default BaseComponent;
