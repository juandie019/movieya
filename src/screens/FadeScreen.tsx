import React from 'react';
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
	const { fadeIn, fadeOut, opacity } = useFade();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}
    >
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
					opacity: opacity,
        }}
      />

			<Button
				title="Fade In"
				onPress={ () => fadeIn()}
			/>

			<Button
				title="Fade out"
				onPress={ () => fadeOut()}
			/>
    </View>
  );
};
