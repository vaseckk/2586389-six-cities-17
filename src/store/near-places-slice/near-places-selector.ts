import {AppState} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

export const getNearPlaces = (state: AppState) => state[NameSpace.NearPlaces].data;
