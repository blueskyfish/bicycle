
export interface UserStateModel {
  id: number;
  name: string;
  email: string;
  roles: string[];
}

export const initialUserState: UserStateModel = {
  id: null,
  name: null,
  email: null,
  roles: null,
}
