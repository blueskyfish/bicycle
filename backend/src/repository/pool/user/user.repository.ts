import * as _ from 'lodash';
import { ValidUtil } from '../../../auth/util';
import { SubRepository } from '../sub-repository';
import { IDbInsertUser, IDbUser } from './entities';
import {
  SQL_FIND_USER_BY_EMAIL,
  SQL_FIND_USER_BY_ID,
  SQL_FIND_USER_FROM_EMAIL,
  SQL_INSERT_USER,
  SQL_UPDATE_USER_PASSWORD
} from './user.sql';

/**
 * Repository access to the users data
 */
export class UserRepository extends SubRepository {

  /**
   * Get the user with the given email
   *
   * @param {string} email the searched email
   * @returns {Promise<IDbUser | null>} the user or null
   */
  async findUserByEmail(email: string): Promise<IDbUser | null> {
    return this.conn.selectOne<IDbUser>(SQL_FIND_USER_BY_EMAIL, {email});
  }

  /**
   * Get the user with the given user id.
   *
   * @param {number} userId the searched user id
   * @returns {Promise<IDbUser | null>} the user or null
   */
  async findUserById(userId: number): Promise<IDbUser | null> {
    return await this.conn.selectOne(SQL_FIND_USER_BY_ID, {userId});
  }

  /**
   * Check whether the email is exist and used.
   *
   * @param {string} email the searched email
   * @returns {Promise<boolean>} `true` means the email exist and in use
   */
  async emailExists(email: string): Promise<boolean> {
    const result = await this.conn.selectOne<{userId: number}>(SQL_FIND_USER_FROM_EMAIL, {email});
    return !_.isNil(result) && ValidUtil.isPositiv(result.userId);
  }

  /**
   * Insert a new user.
   *
   * @param {IDbInsertUser} values the values of the new user
   * @returns {Promise<number>} the user id
   */
  async insertUser(values: IDbInsertUser): Promise<number> {
    return this.conn.insert(SQL_INSERT_USER, values);
  }

  /**
   * Update the user password.
   *
   * @param {number} userId the user id
   * @param {string} password the formatted password
   * @returns {Promise<number>} the affected rows
   */
  async updateUserPassword(userId: number, password: string): Promise<number> {
    return await this.conn.update(SQL_UPDATE_USER_PASSWORD, {
      userId,
      password
    });
  }
}
