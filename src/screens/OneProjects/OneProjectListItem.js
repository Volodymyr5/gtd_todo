import React from 'react';
import { Checkbox, List, TextInput } from 'react-native-paper';
import { listItem } from './style';

export default function OneProjectListItem({ text: initText, checked: initChecked }) {
    const [text, setText] = React.useState(initText);
    const [checked, setChecked] = React.useState(!!initChecked);

    return (
        <List.Item
            descriptionStyle={checked ? { ...listItem.description, ...listItem.descriptionChecked } : listItem.description}
            left={() => <>
                <List.Icon
                    icon="arrow-up-down"
                    style={listItem.leftIcon}
                />
                <Checkbox.Item
                    status={checked ? 'checked' : ''}
                    onPress={status => setChecked(!checked)}
                    style={listItem.leftCheckbox}
                />
            </>}
            description={<TextInput
                value={text}
                onChangeText={text => setText(text)}
                mode="flat"
                disabled={false}
                editable={true}
                style={listItem.descriptionInput}
                right={<TextInput.Icon name="close" />}
            />}
        />
    );
}