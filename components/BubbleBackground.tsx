import React from 'react';
import { View, Animated, Easing, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function BubbleBackground() {
  // Simples animação de bolhas subindo
  const bubbles = [
    { left: width * 0.2, size: 80, delay: 0 },
    { left: width * 0.5, size: 120, delay: 500 },
    { left: width * 0.7, size: 60, delay: 1000 },
    { left: width * 0.3, size: 100, delay: 1500 },
    { left: width * 0.8, size: 70, delay: 2000 },
  ];

  return (
    <View style={StyleSheet.absoluteFill}>
      {bubbles.map((bubble, idx) => (
        <AnimatedBubble
          key={idx}
          left={bubble.left}
          size={bubble.size}
          delay={bubble.delay}
        />
      ))}
    </View>
  );
}

type AnimatedBubbleProps = {
  left: number;
  size: number;
  delay: number;
};

function AnimatedBubble({ left, size, delay }: AnimatedBubbleProps) {
  const translateY = React.useRef(new Animated.Value(height)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -size,
          duration: 7000,
          delay,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: height,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateY, delay, size]);

  return (
    <Animated.View
      style={[
        styles.bubble,
        {
          left,
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: [{ translateY }],
          opacity: 0.3,
          backgroundColor: 'rgba(33,161,241,0.3)',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(33,161,241,0.3)',
  },
});