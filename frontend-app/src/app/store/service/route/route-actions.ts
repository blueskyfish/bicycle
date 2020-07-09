import { RouterPathType } from '../../../common/util';

export namespace Route {

  export class Navigate {
    static readonly type: '[Route] navigate to page';

    constructor(public readonly paths: RouterPathType[]) {}
  }
}
