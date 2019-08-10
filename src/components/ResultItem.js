import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import ImageProvider from "./ImageProvider";

const ResultItem = ({ result }) => {
    const {image_url, review_count, rating, name} = result;
    return (
        <View style={styles.container}>
            <ImageProvider img_url={image_url}/>
            <Text style={styles.name}>{name}</Text>
            <Text>{rating} Stars, {review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        marginTop: 5
    },
        container: {
        marginLeft: 15
    }
});



export default ResultItem;