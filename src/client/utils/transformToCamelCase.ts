 interface TestContentResponse {
  id: number;
  servers: string;
  tenants: string;
  users_type: string;
  date: Date;
  message: string;
  block: boolean;
  active: boolean;
}

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

type SnakeToCamel<T> = {
  [K in keyof T as SnakeToCamelCase<string & K>]: T[K];
};


export class Transformer<T> {
  public transformToCamelCase(obj: T): SnakeToCamel<T> {
    const toCamel = (str: string) =>
      str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

    const result: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const camelKey = toCamel(key);
        result[camelKey] = obj[key];
      }
    }
    return result as SnakeToCamel<T>;
  }
}

const snakeCaseObject: TestContentResponse = {
  id: 1,
  servers: "Server 1",
  tenants: "Tenant 1",
  users_type: "admin",
  date: new Date(),
  message: "Test message",
  block: false,
  active: true,
};

const transformer = new Transformer<TestContentResponse>();
const camelCaseObject = transformer.transformToCamelCase(snakeCaseObject);

console.log(camelCaseObject);