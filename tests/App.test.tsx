import { render, waitFor } from '@testing-library/react-native';
import * as SplashScreen from 'expo-splash-screen';

import App from '../App'; // Replace with the path to your component

jest.mock('expo-splash-screen', () => ({
  hideAsync: jest.fn(),
  preventAutoHideAsync: jest.fn(), // If you use this method, you should also mock it
}));

describe('App', () => {
  it('shows the splash screen', async () => {
    render(<App />);
    await waitFor(() => expect(SplashScreen.preventAutoHideAsync).toHaveBeenCalled());
  });
});
