import React from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight =  Dimensions.get('screen').height;

interface Props extends NativeStackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ( { route, navigation }: Props ) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={ styles.imageContainer }>
        <View style={ styles.imageBorder }>
          <Image
            source={{ uri }}
            style= { styles.posterImage}
          />
        </View>
      </View>
      <View style={ styles.marginContainer }>
        <Text style={ styles.subtitle }> { movie.original_title } </Text>
        <Text style={ styles.title }> { movie.title } </Text>
      </View>
      {
        isLoading
          ? <ActivityIndicator size={ 30 } color="grey" />
          : <MovieDetails movieFull={ movieFull! } cast={ cast } />
      }

      {/* Boton para cerrar */}
      <View style={ styles.backButton }>
        <TouchableOpacity
          onPress={ () => navigation.goBack() }
        >
          <Icon
            color="white"
            name="arrow-back-outline"
            size={ 50 }
            />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  subtitle: {
    color: 'black',
    fontSize: 18,
    opacity: 0.8,
  },

  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 20,
  },
});
