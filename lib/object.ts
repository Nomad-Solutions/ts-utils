import { PrettifyShallow } from './prettify';

/*
Can be used in place of Object.assign to merge objects together type safely, e.g.:

const obj1 = { a: 1, b: 2 } as const;
const obj2 = { b: 3, c: 4 } as const;
const merged = merge(obj1, obj2);
//    ^? 
*/

export type Merge<T1, T2> = PrettifyShallow<Omit<T1, keyof T2> & T2>

export type MergeArrayOfObjects<TArr extends readonly object[], T1 = object> = TArr extends [
	infer T2 extends object,
	...infer TRest extends object[],
]
	? MergeArrayOfObjects<TRest, Merge<T1, T2>>
	: T1

export function merge<TArr extends readonly object[]>(...objects: TArr): MergeArrayOfObjects<TArr> {
	return Object.assign({}, ...objects);
}

/* 
Can be used to get a union type of the keys / values of an object:
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Keys<T extends Record<string, any>> = keyof T
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Values<T extends Record<string, any>> = T[Keys<T>]

/* 
Strips all null or undefined properties from a type / object
*/
export type Valuable<T> = { [K in keyof T as T[K] extends null | undefined ? never : K]: T[K] };

export function removeNullValues<T extends object, V = Valuable<T>>(obj: T): V {
	return Object.fromEntries(
		Object.entries(obj).filter(([ , v ]) => !(v === null || typeof v === 'undefined'))
	) as V;
}

/*
Removes specified properties from an object (like typescript's Omit utility)
*/

export function omit<T extends object, K extends [...(keyof T)[]]>(
	obj: T,
	...keys: K
): {
		[K2 in Exclude<keyof T, K[number]>]: T[K2]
	} {
	const ret = {} as {
		[K in keyof typeof obj]: (typeof obj)[K]
	};
	let key: keyof typeof obj;
	for (key in obj) {
		if (!keys.includes(key)) {
			ret[key] = obj[key];
		}
	}
	return ret;
}

/*
Returns only the specified properties from an object (like typescript's Pick utility)
*/

export function mask<T, K extends keyof T>(obj: T, ...keys: K[]): PrettifyShallow<Pick<T, K>> {
	return keys.reduce((o, k) => ((o[k] = obj[k]), o), {} as Pick<T, K>);
}