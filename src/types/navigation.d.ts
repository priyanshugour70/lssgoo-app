/**
 * Navigation Type Declarations
 */

import { RootStackParamList, BottomTabParamList } from './index';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export {};

