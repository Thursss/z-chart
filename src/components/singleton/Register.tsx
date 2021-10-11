import { EchartTypes } from '../type';
class Register {
  items: {
    [key: string]: any;
  };
  constructor() {
    this.items = {};
  }
  register<T>(key: EchartTypes, value: T) {
    this.items[key] = value;
    return this;
  }
  has(key: EchartTypes): boolean {
    const item = this.items[key];
    return item !== null && item !== undefined;
  }
  keys(): string[] {
    return Object.keys(this.items);
  }
  get<T>(key: EchartTypes) {
    return this.items[key] as T;
  }
  clear() {
    this.items = {};
    return this;
  }
  remove(key: EchartTypes) {
    if (!this.has(key)) return;
    delete this.items[key];
    return this;
  }
}

export default Register;
