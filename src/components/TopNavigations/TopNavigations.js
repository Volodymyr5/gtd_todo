import {Appbar} from 'react-native-paper';
import React from 'react';
import {useSelector} from 'react-redux';

export default function TopNavigations() {
    const {name, age} = useSelector((state) => state.projectReducer);

    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={() => {
            }}/>
            <Appbar.Content title={name + ' ' + age}/>
            <Appbar.Action icon="plus-box" onPress={() => {
            }}/>
        </Appbar.Header>
    );
}
