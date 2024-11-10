import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
import { styles } from './styles';

interface AnimatedToastProps {
  message: string;
  onHide: () => void;
}

export const Toast: React.FC<AnimatedToastProps> = ({ message, onHide }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => onHide());
    }, 3000);

    return () => clearTimeout(timer);
  }, [opacity, onHide]);

  return (
    <Animated.View style={[styles.toast, { opacity }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};