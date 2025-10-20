/**
 * Tailwind CSS Configuration
 * 
 * Note: This project uses twrnc (tailwind-react-native-classnames) for styling.
 * This config is kept for reference but twrnc works with standard Tailwind classes out of the box.
 * 
 * Usage:
 * import tw from 'twrnc';
 * <View style={tw`bg-blue-500 p-4`}>
 *   <Text style={tw`text-white text-lg`}>Hello World!</Text>
 * </View>
 */

module.exports = {
  // twrnc doesn't require content configuration
  theme: {
    extend: {
      // Custom colors can be used inline with twrnc
      // e.g., tw`bg-[#0ea5e9]`
    },
  },
  plugins: [],
}