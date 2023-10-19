import { General } from "./general/types";
import { UserStore } from "./user/types";

export interface State {
  user: UserStore;
  general: General;
}
