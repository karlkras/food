import React from 'react';
import { StyleSheet, Image } from 'react-native';

const ImageProvider = ({ img_url, width, height }) => {
    return (
        <>
            <Image
                style={
                    {
                        width: width ? width : 250,
                        height: height ? height : 120,
                        borderRadius: 4
                    }
                }
                source={{ uri: img_url }}
            />
        </>
    )
};

export default ImageProvider;