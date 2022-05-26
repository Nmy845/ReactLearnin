import type { State } from '../../types/state';
import type { GuitarProps } from '../../types/guitar';

export const getGuitarList = ({guitars}: State): GuitarProps[] => guitars.guitarList;
export const getIsDataLoaded =({guitars}: State): boolean => guitars.isDataLoaded;
