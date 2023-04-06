import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[],
    headerTitle?: string,
}

export const MovieFlatList = ( { movies, headerTitle }: Props) => {
    return (
        <View style={{
            height: ( headerTitle ) ? 260 : 230,
        }}>
            {
                headerTitle && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>{ headerTitle }</Text>
            }
            <FlatList
                data={ movies }
                renderItem={ ( { item }: any ) => <MoviePoster movie={ item } width={ 140 } height={ 200 }/> }
                keyExtractor={ ( item ) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    );
};
