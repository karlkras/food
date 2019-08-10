import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { Feather} from '@expo/vector-icons';

const SearchBar = ({searchItem, onChange, onTermSubmit}) => {

    return (
        <View style={styles.container}>
            <Feather style={styles.iconStyle} name={'search'} />
            <TextInput
                value={searchItem}
                onChangeText={onChange}
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder={'Search'}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    input: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;
