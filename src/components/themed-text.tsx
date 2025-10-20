import { Text, type TextProps } from 'react-native';
import tw from 'twrnc';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const getTypeStyle = () => {
    switch (type) {
      case 'title':
        return tw`text-3xl font-bold`;
      case 'defaultSemiBold':
        return tw`text-base font-semibold`;
      case 'subtitle':
        return tw`text-xl font-bold`;
      case 'link':
        return [tw`text-base`, { color: '#0a7ea4', lineHeight: 30 }];
      default:
        return tw`text-base`;
    }
  };

  return (
    <Text
      style={[
        { color },
        getTypeStyle(),
        style,
      ]}
      {...rest}
    />
  );
}
