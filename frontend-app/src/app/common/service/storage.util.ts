
/**
 * The prefix for the item name
 */
const PREFIX = 'bicycle';

/**
 * Utility class for the storage service
 */
export class StorageUtil {

  /**
   * Add the prefix to the item key.
   *
   * @param {string} key the item key
   * @returns {string} the complete item key
   */
  static buildKey(key: string): string {
    return `${PREFIX}.${key}`;
  };

}
