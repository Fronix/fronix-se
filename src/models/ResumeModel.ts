import { Action, action } from 'easy-peasy';
import { ResumeResponseType } from '../types/GitConnectTypes';

export interface ResumeModel {
  resume: ResumeResponseType | any;
  setResume: Action<ResumeModel, ResumeResponseType>;
}

const resume: ResumeModel = {
  resume: null,
  setResume: action((state, payload) => {
    state.resume = payload;
  })
};

export default resume;
