import {APPSTATE} from './appstate.enum';
import {ISettings} from './settings.interface';

export interface AppContext {
    current_appstate: APPSTATE;
    current_appconfig: Array<ISettings>;
}