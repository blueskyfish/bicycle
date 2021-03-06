/* tslint:disable */
export interface BikeChangePasswordPayload {

  /**
   * The current password
   */
  current: string;

  /**
   * The new password
   */
  password: string;

  /**
   * The confirmed new password
   */
  repeat: string;
}
