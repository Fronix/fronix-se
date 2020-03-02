import { Action, action, actionOn, ActionOn } from 'easy-peasy';
import { StoreModel } from '.';

const prefersDarkMode = localStorage.getItem('prefersDarkMode');

export interface ThemeSettingsModel {
  prefersDarkMode: boolean;
  asciiArt: string;
  togglePrefersDarkMode: Action<ThemeSettingsModel>;
  onThemeChange: ActionOn<ThemeSettingsModel, StoreModel>;
  setAsciiArt: Action<ThemeSettingsModel, string>;
}

const themeSettings: ThemeSettingsModel = {
  prefersDarkMode: JSON.parse(prefersDarkMode!) ?? true,
  asciiArt: '',
  togglePrefersDarkMode: action(state => {
    state.prefersDarkMode = !state.prefersDarkMode;
  }),
  onThemeChange: actionOn(
    (actions, storeActions) => actions.togglePrefersDarkMode,
    (state, target) =>
      localStorage.setItem('prefersDarkMode', JSON.stringify(state.prefersDarkMode))
  ),
  setAsciiArt: action((state, payload) => {
    state.asciiArt = payload;
  })
};

export default themeSettings;
