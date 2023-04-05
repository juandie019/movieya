import React from 'react';
// import { useNavigation } from '@react-navigation/core'
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { MovieFlatList } from '../components/MovieFlatList';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  // const navigation = useNavigation();

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="blue" size={ 45 }/>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/* Carousel Principal */}
        <View style={{ height: 440}}>
          <Carousel
            data={ nowPlaying }
            renderItem={ ( { item }: any ) => <MoviePoster movie={ item }/> }
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
            inactiveSlideOpacity={ 0.9 }
            />
        </View>

        {/* Peliculas populares */}
        <MovieFlatList
          headerTitle="Popular"
          movies={ popular }
        />
        <MovieFlatList
          headerTitle="Top Rated"
          movies={ topRated }
        />
        <MovieFlatList
          headerTitle="Upcoming"
          movies={ upcoming }
        />
      </View>
    </ScrollView>
  );
};
