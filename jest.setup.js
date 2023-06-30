import mockAsyncStorage from './tests/mock-async-storage';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
