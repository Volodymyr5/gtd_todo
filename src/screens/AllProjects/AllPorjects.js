import { List } from 'react-native-paper';
import React from 'react';
import AllProjectLisItem from './AllProjectLisItem';

const projects = [
    {
        id: 1,
        category: 1,
        title: '1110 Lorem Ipsum is simply',
    },
    {
        id: 2,
        category: 2,
        title: '2220 Lorem Ipsum is simply',
    },
];

export default function AllProjectsScreen({ navigation }) {
    const listItems = projects.map((project) => <AllProjectLisItem
        project={project}
        key={project.id}
    />);

    return (
        <List.Section>
            <List.Subheader>Projects</List.Subheader>
            {listItems}
        </List.Section>
    );
}
