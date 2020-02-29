import themeSettings, { ThemeSettingsModel } from './ThemeModel';
import resume, { ResumeModel } from './ResumeModel';

export interface StoreModel {
  themeSettings: ThemeSettingsModel;
  resume: ResumeModel;
}

const model: StoreModel = {
  themeSettings,
  resume
};

export default model;
