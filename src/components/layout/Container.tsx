/**
 * Container Component
 * Main container for screen content with consistent padding
 */

import React from 'react';
import { View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps extends ViewProps {
  safe?: boolean;
  centered?: boolean;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  safe = true,
  centered = false,
  children,
  style,
  ...props
}) => {
  const Wrapper = safe ? SafeAreaView : View;

  return (
    <Wrapper
      className={`
        flex-1 bg-white
        ${centered ? 'justify-center items-center' : ''}
      `}
      style={style}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Container;

