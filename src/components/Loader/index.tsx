import { ActivityIndicator, View } from 'react-native';

export default function Loader({ color = '#000' }) {
  return (
    <View className='flex-1 items-center justify-center bg-white dark:bg-slate-800'>
      <ActivityIndicator color={color} />
    </View>
  );
}
