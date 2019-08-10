import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultItem from "./ResultItem";

const ResultsList = ({title, items, navigation}) => (
    items.length ?
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.results}>We've found {items.length} results</Text>
            <FlatList
                horizontal
                data={items}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Details', {
                                id: item.id
                            })
                        }}>
                            <ResultItem result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
        :
        null
);

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    results: {
        fontSize: 12,
        marginBottom: 5,
        marginLeft: 15
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);