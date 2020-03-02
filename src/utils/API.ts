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

export { getGitConnectResume };
