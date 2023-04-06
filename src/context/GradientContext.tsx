import React, { createContext, useState } from 'react';

interface ImageColors {
    primary: string;
    secondary: string,
};

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setCurrentColors: (newColors: ImageColors) => void;
    setPrevColors: (oldColors: ImageColors) => void;
}
export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

    const [ colors, setColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [ prevColors, setOldColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setCurrentColors = (newColors: ImageColors) => {
        setColors(newColors);
    };

    const setPrevColors = (oldColors: ImageColors) => {
        setOldColors(oldColors);
    };

    return (
        <GradientContext.Provider
            value= {{
                colors,
                prevColors,
                setCurrentColors,
                setPrevColors,
            }}
        >
        { children }
        </GradientContext.Provider>
    );
};
