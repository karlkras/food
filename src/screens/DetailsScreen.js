import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import yelp from '../api/yelp';
import ImageProvider from "../components/ImageProvider";

const DetailsScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id');

    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };

    useEffect(() => {
        getResults(id);
    }, []);

    if (!result) {
        return null;
    }

    const imageList = result.photos.map((photo, index) => (
        {key: `${index}`, url: photo}
    ));

    return (
        <View>
            <FlatList
                data={imageList}
                renderItem={({item}) => {
                    return (
                        <View style={styles.listItem}>
                            <ImageProvider
                                img_url={item.url}
                                width={200}
                                height={100}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        margin: 5
    }
});

export default DetailsScreen;

