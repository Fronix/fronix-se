import axios from 'axios';

const api = axios.create({
  responseType: 'json',
  timeout: 1000
});

const getGitConnectResume = async () => {
  //const response = await api.get('https://gitconnected.com/v1/portfolio/fronix/');
  const response = await api.get(
    'https://gist.githubusercontent.com/Fronix/b03cc13d426176502c290484d7323191/raw/d1c3f46fefb12480ce8c8a4156f8ba86675c0802/resume.json'
  );
  return { data: response.data, status: response.status };
};

export { api, getGitConnectResume };
