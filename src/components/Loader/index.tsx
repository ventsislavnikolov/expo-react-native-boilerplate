import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loader({ color = '#000' }) {
  return (
    <View style={{ ...styles.container }}>
      <ActivityIndicator color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(169,169,169, 0)',
    height: '100%',
    justifyContent: 'space-around',
    position: 'absolute',
    width: '100%',
    zIndex: 2,
  },
});
