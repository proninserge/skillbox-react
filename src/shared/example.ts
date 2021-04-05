// 1

function concat(stringA: string, stringB: string): string {
    return `${stringA} ${stringB}`;
};

// 2

interface MyHometaskObjectInterface {
    howIDoIt: string;
    someArray: Array<string | number>;
    withData?: [MyHometaskObjectInterface]; // или withData: [MyHometaskObjectInterfaceTwo] если MyHometask.withData.someArray - tuple
};

// interface MyHometaskObjectInterfaceTwo extends MyHometaskObjectInterface {
//     someArray: [string, number],
// };

const MyHometask: MyHometaskObjectInterface = {
    howIDoIt: 'I do it well',
    someArray: ['string one', 'string two', 42],
    withData: [
        {
            howIDoIt: 'I do it well',
            someArray: ['string one', 23],
        }
    ],
};

// 3

const myArray: MyArray<number> = [1, 2, 3, 4, 5];

type InitialValueType = number | string;

interface MyArray<T> {
    [N: number]: T;
    // map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;

    reduce<U>(fn: (acc: T, value: T) => U, initialValue?: InitialValueType): U;
};

// 4

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externatData: {
        basis: number;
        value: string;
    }
};

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
}

const homeTask: MyPartial<IHomeTask> = {
    externatData: {
        value: 'win'
    }
};

// 5* -> exampleTSX.tsx

// 6*

type TDivElement = JSX.IntrinsicElements['div'];

type TGetJSXPropsProp<E extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[E];

const props: TGetJSXPropsProp<'input'> = {
    htmlFor: 'asd',
    id: '100500',
    className: 'class'
}
