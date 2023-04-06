import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={ styles.container }>
      {
        ( actor.profile_path ) && (
          <Image
            source={{ uri }}
            style= { styles.actorImage }
          />
        )
      }
      <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            { actor.name }
          </Text>
          <Text style={{ fontSize: 16, opacity: 0.7, color: 'white'}}>
            { actor.character }
          </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'black',
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 10,
    },

    actorImage: {
      width: 50,
      height: 50,
      borderRadius: 100,
      marginRight: 10,
    },
});
