import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };
    return (
        <>
            <SearchBar
                searchItem={searchTerm}
                onChange={setSearchTerm}
                onTermSubmit={() => {
                    if(searchTerm) {
                        searchApi(searchTerm)
                    }
                }}
            />

            {errorMsg ?
                (
                    <View style={styles.errorView}>
                        <Text style={styles.errorStyle}>{errorMsg}</Text>
                    </View>
                )
                :
                null
            }
            <ScrollView>
                <ResultsList
                    items={filterResultsByPrice('$')}
                    title='Cost Effective'
                />
                <ResultsList
                    items={filterResultsByPrice('$$')}
                    title='Bit Pricier'
                />
                <ResultsList
                    items={filterResultsByPrice('$$$')}
                    title='Big Spender!'
                />
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red'

    },
    errorView: {
        marginLeft: 15
    }
});
export default SearchScreen;

