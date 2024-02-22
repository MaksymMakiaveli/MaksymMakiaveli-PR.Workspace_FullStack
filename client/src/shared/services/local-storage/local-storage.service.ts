import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private storage: Storage | null = null;

  constructor(@Inject(DOCUMENT) private _doc: Document) {
    if (this._doc.defaultView && this._doc.defaultView.localStorage) {
      this.storage = this._doc.defaultView.localStorage;
    }
  }

  get = <T>(key: string): T | null => {
    const value = this?.storage?.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      return null;
    }
  };

  set = (key: string, value: any) => {
    this?.storage?.setItem(key, JSON.stringify(value));
  };

  remove = (key: string) => {
    this?.storage?.removeItem(key);
  };

  clear = () => {
    this?.storage?.clear();
  };
}
