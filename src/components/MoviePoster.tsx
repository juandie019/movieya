import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface MoviePosterProps {
  movie: Movie,
  height?: number,
  width?: number,
}

export const MoviePoster = ( { movie, height = 420, width = 300 } : MoviePosterProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();



  return (
    // <TouchableOpacity>
    <TouchableOpacity
      onPress={ () => navigation.navigate('DetailScreen', movie)}
      activeOpacity={ 0.9 }
      style={{ width, height, marginHorizontal: 8 }}
    >
      <View style={ styles.imageWrapper }>
        <Image
          source={{ uri }}
          style={ styles.image }
          />
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
  },

  imageWrapper: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: 20,
  },

  image: {
    flex: 1,
    borderRadius: 20,
  },
});
