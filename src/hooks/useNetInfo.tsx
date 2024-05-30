import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

let currentNetwork: boolean | null;

const useNetInfo = () => {
  NetInfo.fetch().then((state: {isConnected: boolean | null}) => {
    currentNetwork = state.isConnected;
  });

  const [isConnected, setIsConnected] = useState<boolean | null>(
    currentNetwork,
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(
      (state: {
        isConnected:
          | boolean
          | ((prevState: boolean | null) => boolean | null)
          | null;
      }) => {
        setIsConnected(state.isConnected);
      },
    );
    return () => unsubscribe();
  }, []);

  const checkConnectivity = () => {
    NetInfo.fetch().then(
      (state: {
        isConnected:
          | boolean
          | ((prevState: boolean | null) => boolean | null)
          | null;
      }) => {
        setIsConnected(state.isConnected);
      },
    );
  };

  return {isConnected, checkConnectivity};
};
export default useNetInfo;
