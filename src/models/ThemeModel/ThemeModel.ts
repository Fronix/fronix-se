import { Action, action, actionOn, ActionOn } from 'easy-peasy';
import { StoreModel } from '../';

const prefersDarkMode = localStorage.getItem('prefersDarkMode');

export interface ThemeSettingsModel {
  prefersDarkMode: boolean;
  togglePrefersDarkMode: Action<ThemeSettingsModel>;
  onThemeChange: ActionOn<ThemeSettingsModel, StoreModel>;
}

const themeSettings: ThemeSettingsModel = {
  prefersDarkMode: JSON.parse(prefersDarkMode!) ?? true,
  togglePrefersDarkMode: action(state => {
    state.prefersDarkMode = !state.prefersDarkMode;
  }),
  onThemeChange: actionOn(
    (actions, storeActions) => actions.togglePrefersDarkMode,
    (state, target) =>
      localStorage.setItem('prefersDarkMode', JSON.stringify(state.prefersDarkMode))
  )
};

export default themeSettings;
