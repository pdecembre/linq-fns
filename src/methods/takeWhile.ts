import { IIterator } from "../intefaces/iterator.interface";
import { TakeClause } from "./take";
import { BaseIterator } from "../implements/base.iterator";

export class TakeWhileClause<T> extends BaseIterator<T> implements IIterator<T> {

    _iterator: (item: T) => boolean;

    execute(source: any[] | T[]): T[] | any[] {
        if (source) {
            let _takeCount = 0;
            for (let i = 0; i < (source as T[]).length; i++) {
                const _item = source[i];
                if (this._iterator(_item)) break;
                _takeCount += 1;
            }
            return new TakeClause(_takeCount).execute(source);
        }
        return null;
    }

    constructor(func: (item: T) => boolean) {
        super();
        this._iterator = func;
    }
}