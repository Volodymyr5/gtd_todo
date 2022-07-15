import {Theme} from 'react-native-paper/src/types';
import {DefaultTheme} from 'react-native-paper';

export const theme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'white',
    },
};
