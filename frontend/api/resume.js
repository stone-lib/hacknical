import { postData, getData } from './base';

const getResume = () => {
  return getData('/resume');
};

const setResume = (resume) => {
  return postData('/resume', { resume })
};

export default {
  getResume,
  setResume
}
