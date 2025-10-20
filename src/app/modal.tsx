import { Link } from 'expo-router';
import tw from 'twrnc';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={tw`flex-1 items-center justify-center p-5`}>
      <ThemedText type="title">This is a modal</ThemedText>
      <Link href="/" dismissTo style={tw`mt-4 py-4`}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}
