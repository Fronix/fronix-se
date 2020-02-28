import themeSettings, { ThemeSettingsModel } from './ThemeModel/ThemeModel';

export interface StoreModel {
  themeSettings: ThemeSettingsModel;
}

const model: StoreModel = {
  themeSettings
};

export default model;
