import React from 'react';
import { IconButton, List, TextInput } from 'react-native-paper';
import OneProjectListItem from './OneProjectListItem';
import { projectName } from './style';

export default function OneProjectScreen({ route: { params = {} }, navigation }) {
    const { id = 0 } = params;

    const [name, setName] = React.useState('New Project');

    console.log('id', id);

    const items = [{
        id: 1,
        text: 'aaaa',
        checked: true,
    }, {
        id: 2,
        text: 'bbbb',
        checked: false,
    }];

    const listItems = items.map(({ id, text, checked }) =>
        <OneProjectListItem
            key={id}
            text={text}
            checked={checked}
        />);

    return (
        <List.Section>
            <List.Subheader style={projectName.container}>
                <IconButton
                    onPress={() => { navigation.navigate("AllProjects") }}
                    icon="arrow-left-top"
                    size={18}
                />
                <TextInput
                    label="Project Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    mode="flat"
                    style={projectName.input}
                />
            </List.Subheader>

            {listItems}
        </List.Section>
    );
}