import {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {
  getDevice,
  getDeviceName,
  getVersion,
  getUserAgentSync,
  getUniqueId,
} from 'react-native-device-info';

const useDeviceInfo = () => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceVersion, setVersion] = useState('');
  const [deviceID, setDeviceId] = useState('');
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    getUniqueId().then(id => {
      setDeviceId(id);
    });

    if (Platform.OS === 'android') {
      getDevice().then((device: string) => {
        setDeviceName(device);
      });
    }
    if (Platform.OS === 'ios') {
      getDeviceName().then((deviceiOSName: string) => {
        setDeviceName(deviceiOSName);
      });
    }
    setVersion(getVersion());
    setUserAgent(getUserAgentSync());
  }, []);

  return {
    deviceName,
    deviceVersion,
    deviceID,
    userAgent,
  };
};
export default useDeviceInfo;
