import { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = () => {
    const opacity = useRef(new Animated.Value(0)).current;

    const fade = (value: number, callback?: Function, duration: number = 300) => {
        Animated.timing(
            opacity,
            {
                toValue: value,
                duration,
                useNativeDriver: true,
            }
        ).start(() => callback && callback());
    };

    const fadeIn = (callback?: Function) => {
        fade(1, callback);
    };

    const fadeOut = (duration: number = 300) => {
        fade(0, null, duration);
    };


    return {
        fadeIn,
        fadeOut,
        fade,
        opacity,
    };
};
