import { useNavigation } from '@react-navigation/native';
import { IconButton, Colors } from 'react-native-paper';

function AddProjectButton() {
    const navigation = useNavigation();

    return (
        <IconButton
            onPress={() => { navigation.navigate("OneProject", { id: 0 }) }}
            icon="plus"
            size={18}
            style={{
                borderWidth: 2,
                borderColor: Colors.grey500,
            }}
        />
    )
}

const headerOptions = {
    headerTitle: '',
    headerRight: () => (<AddProjectButton />),
};

export default headerOptions;