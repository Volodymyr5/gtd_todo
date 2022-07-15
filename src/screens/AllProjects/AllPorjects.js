import {List} from 'react-native-paper';
import React from 'react';
import OneProjectLisItem from '../../components/OneProjectLisItem';

const projects = [
    {
        id: 1,
        category: 1,
        title: '111 Lorem Ipsum is simply',
    },
    {
        id: 2,
        category: 2,
        title: '222 Lorem Ipsum is simply',
    },
];

export default function AllProjectsScreen({ navigation }) {
    const listItems = projects.map((project) => {
        return <OneProjectLisItem project={project} key={project.id}/>;
    });

    return (
        <List.Section>
            <List.Subheader>Projects</List.Subheader>
            {listItems}
        </List.Section>
    );
}
