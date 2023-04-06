import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[],
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
        {/* Detalles */}
        <View style={{ marginHorizontal: 20 }}>
            <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Icon
                    name="star-outline"
                    color="grey"
                    size={ 16 }
                    />
                <Text style={{ marginHorizontal: 5, color: 'grey' }} >{ movieFull.vote_average }</Text>
                <Text style={{ color:'grey' }}>
                    - { movieFull.genres.map(g => g.name ).join(', ') }
                </Text>
            </View>

            {/* Historia */}
            <Text style={{ fontSize: 23, marginVertical: 10, fontWeight: 'bold', color: 'black' }}>
                Historia
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 10, color:'black' }}>
                { movieFull.overview}
            </Text>

            {/* Presupuesto */}
            <Text style={{ fontSize: 23, marginVertical: 10, fontWeight: 'bold', color: 'black' }}>
                Presupuesto
            </Text>
            <Text style={{ fontSize: 18, marginBottom:10, color: 'black' }}>
                { currencyFormatter.format(movieFull.budget, { code: 'USD'}) }
            </Text>
        </View>

        {/* casting */}
        <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 23, marginVertical: 10, marginHorizontal: 20, fontWeight: 'bold', color: 'black' }}>
                Actores
            </Text>
            <FlatList
                data={ cast }
                horizontal={ true }
                renderItem={ ({ item }) => <CastItem actor={item}/> }
                keyExtractor={ (item) => item.id.toString() }
                showsHorizontalScrollIndicator={ false }
            />
            {/* <CastItem actor={cast[0]}/> */}
        </View>
    </>
  );
};
