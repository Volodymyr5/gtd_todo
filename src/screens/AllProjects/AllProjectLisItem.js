import { List } from 'react-native-paper';
import React from 'react';
import { listItem } from './style';
import { useNavigation } from '@react-navigation/native';

const categories = [
    {
        id: 1,
        name: 'Hobby',
        icon: 'hammer',
    },
    {
        id: 2,
        name: 'Money',
        icon: 'bitcoin',
    },
];

export default function AllProjectLisItem({ project }) {
    const navigation = useNavigation();
    const projectCategoryId = project.category || null;
    const categoryIcon = (categories.filter((category) => category.id === projectCategoryId)[0] || {}).icon || 'folder';

    return (
        <List.Item
            key={project.id}
            title={project.title}
            left={() => (
                <List.Icon
                    icon={categoryIcon}
                    style={listItem.icon}
                />
            )}
            onPress={() => navigation.navigate("OneProject", { id: project.id })}
            style={listItem.item}
            titleStyle={listItem.itemTitle}
        />
    );
}
