import {List} from 'react-native-paper';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setAge, setName} from '../../redux/project/project-actions';

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

export default function OneProjectLisItem({project}) {
    const dispatch = useDispatch();

    const projectCategoryId = project.category || null;
    const categoryIcon = (categories.filter((category) => category.id === projectCategoryId)[0] || {}).icon || 'folder';

    return (
        <List.Item
            key={project.id}
            title={project.title}
            left={() => (
                <List.Icon
                    icon={categoryIcon}
                    style={{width: '1.5rem', height: '1.5rem'}}
                />
            )}
            onPress={() => {
                dispatch(setName(project.title));
                dispatch(setAge(project.id));
                console.log(11111);
            }}
            style={{
                paddingVertical: '0',
            }}
            titleStyle={{
                fontSize: 14,
            }}
        />
    );
}
