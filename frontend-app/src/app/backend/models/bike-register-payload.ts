/* tslint:disable */
export interface BikeRegisterPayload {

  /**
   * The user email
   */
  email: string;

  /**
   * The user name
   */
  name: string;

  /**
   * The user password (less 8 signs or more)
   */
  password: string;

  /**
   * The user password as repeat
   */
  repeat: string;

  /**
   * The list of roles
   */
  roles: Array<string>;
}
