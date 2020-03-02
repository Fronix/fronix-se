import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import tempData from '../tempdata.json';

const getGitConnectResume = async (fake: boolean = false) => {
  if (fake) {
    const conf: AxiosRequestConfig = {};
    return new Promise<AxiosResponse>((resolve, reject) => {
      return resolve({
        data: tempData,
        status: 200,
        headers: {},
        statusText: 'fakedata',
        config: { ...conf }
      });
    });
  }

  const response = await axios.get('https://gitconnected.com/v1/portfolio/fronix/');
  return { data: response.data, status: response.status };
};

const getConsoleText = axios.get(
  `https://gist.githubusercontent.com/Fronix/ad142871aecd0e3dd499a32d08c53c77/raw/3d78a5409b325ba0a0a6a93055f237a673255853/consoleLoad.txt`
);

export { getGitConnectResume, getConsoleText };
