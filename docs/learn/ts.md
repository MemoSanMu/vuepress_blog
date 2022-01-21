## TS-骚操作写法

### `Pick`

是在一个类型对象中，挑选几个类型，组成一个新的的类型。

```ts
interface Angus {
  name: string;
  height: number;
  wight: number;
}

type newAngus = Pick<Angus, 'name' | 'height'>; //{name:string;height:number}
```

> 它的实现

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

### `Omit`

> Omit(a,b) 接收两个参数，第一个是要编辑的基本类型，第二个是你要删除的类型。

```ts
type Person = {
  name: string;
  sex: string;
};
type newPerson = Omit<Person, 'name'>; // {sex:string}
```

> 它的实现

```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

### `Partial`

> Partial 可以快速把某个接口类型中定义的属性变成可选的(Optional)

```ts
type Person = {
  name: string;
  sex: string;
};
type newPerson = Partial<Person>; // {name?:string;sex?:string}
```

> 它的实现

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### `巧用Partial` 就是部分的意思，很常用:

```ts
const mergeOptions = (options: Opt, patch: Partial<Opt>) {
  return { ...options, ...patch };
}

class MyComponent extends React.PureComponent<Props> {
  defaultProps: Partial<Props> = {};
}
```

### `Readonly`

> 将接口所有属性变为只读的.

```ts
type Person = {
  name: string;
  sex: string;
};
type newPerson = Readonly<Person>;
// type newPerson = {readonly name: string;readonly sex: string;}
```

> 它的实现

```ts
type Readonly<T> = { readonly [P in keyof T]: T[P] };
```

### `Exclude`

> 用于删除类型集合中的指定类型.

```ts
type a = string | number;
type newPerson = Exclude<a, string>; //number
```

> 它的实现

```ts
type Exclude<T, U> = T extends U ? never : T;
```

### 巧用 type 定义类型 typeof 操作符可以用来获取一个变量或对象的类型。

> 我们在声明 user 变量时，即得到了值，又获得了类型

```ts
// good one
let user = {
  name: 'Lucy',
  age: 20,
};
type User = typeof user;
```

### `keyof`

> keyof 与 Object.keys 略有相似，只不过 keyof 取 interface 的键。

> TypeScript 允许我们遍历某种类型的属性，并通过 keyof 操作符提取其属性的名称。

```ts
const persion = {
  age: 3,
  text: 'hello world',
};

// type keys = "age" | "text"
type keys = keyof persion;
```

### 查找类型 + 泛型 + keyof

> 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```ts
interface API {
  '/user': { name: string };
  '/menu': { foods: string[] };
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then((res) => res.json());
};

get('');
get('/menu').then((user) => user.foods);
```

### `非空断言`

> 在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型。具体而言，x! 将从 x 值域中排除 null 和 undefined 。
> 那么非空断言操作符到底有什么用呢？下面我们先来看一下非空断言操作符的一些使用场景。

> 1.忽略 undefined 和 null 类型

```ts
function myFunc(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'.
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
}
```

> 2.调用函数时忽略 undefined 类型

```ts
type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator | undefined) {
  // Object is possibly 'undefined'.(2532)
  // Cannot invoke an object which is possibly 'undefined'.(2722)
  const num1 = numGenerator(); // Error
  const num2 = numGenerator!(); //OK
}
```

> 因为 ! 非空断言操作符会从编译生成的 JavaScript 代码中移除，所以在实际使用的过程中，要特别注意。比如下面这个例子：

```ts
const a: number | undefined = undefined;
const b: number = a!;
console.log(b);
```

> 以上 TS 代码会编译生成以下 ES5 代码：

```ts
'use strict';
const a = undefined;
const b = a;
console.log(b);
```

### `巧用ClassOf`

> 有时候，我们要传入类本身，而不是类的实例

```ts
abstract class Animal extends React.PureComponent {
  /* Common methods here. */
}
class Cat extends Animal {}
class Dog extends Animal {}

// `AnimalComponent` must be a class of Animal.
const renderAnimal = (AnimalComponent: Animal) => {
  return <AnimalComponent/>; // WRONG!
}

#上面的代码是错的，因为 Animal 是实例类型，不是类本身。应该

interface ClassOf<T> {
  new (...args: any[]): T;
}
const renderAnimal = (AnimalComponent: ClassOf<Animal>) => {
  return <AnimalComponent/>; // Good!
}

renderAnimal(Cat); // Good!
renderAnimal(Dog); // Good!

```
