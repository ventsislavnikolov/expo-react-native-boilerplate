import { View, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledActivityIndicator = styled(ActivityIndicator);

export default function Loader({ color = '#000' }) {
  return (
    <StyledView className='flex-1 items-center justify-center bg-white dark:bg-slate-800'>
      <StyledActivityIndicator color={color} />
    </StyledView>
  );
}
