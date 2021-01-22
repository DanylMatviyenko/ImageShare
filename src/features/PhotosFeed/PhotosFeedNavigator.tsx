import React, { useContext, useEffect } from 'react';
import DataPhotosContext from '../../Context/DataPhotosProvider';

import {
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image,
    ActivityIndicator} from 'react-native';

export function PhotosFeedNavigator() {
    const { isDataLoaded, photos, updatePhotos } = useContext(DataPhotosContext);

    useEffect(() => {
        updatePhotos(1);
    }, []);
    const onLoadMore = () => {
        if(photos.length !== 0) {
            const currentPage = photos.length / 20;

            updatePhotos(currentPage + 1);
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={ photos }
                keyExtractor={ (photo) => photo.id.toString() }
                onEndReached={ onLoadMore }
                onEndReachedThreshold={0.1}
                numColumns={2}
                ListEmptyComponent={() => {
                    return <ActivityIndicator color="black" animating={!isDataLoaded}/>
                }}
                renderItem={({ item: photo }) => {
                    return (
                        <TouchableOpacity
                            style={styles.touchablePhoto}
                        >
                            <Image source={{ uri: photo.url }} style={styles.photo}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    photo: {
        width: "100%",
        height: 125
    },
    touchablePhoto: {
        flex: 1,
        margin: 2
    }
});