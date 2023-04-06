import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { MovieFlatList } from '../components/MovieFlatList';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getImageColors';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  // const navigation = useNavigation();

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setCurrentColors } = useContext(GradientContext);

  const updatePosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [ primary = 'black', secondary = 'grey' ] = await getImageColors(uri);
    setCurrentColors({ primary, secondary });
  };

  useEffect(() => {
    if (nowPlaying.length > 0){
      updatePosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="blue" size={ 45 }/>
      </View>
    );
  }

  return (
    <GradientBackground>
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
              onSnapToItem={ (index) => updatePosterColors(index) }
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
    </GradientBackground>
  );
};
