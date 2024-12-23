import type { PrettifyShallow } from './prettify';
import type { Merge, ConditionalExcept } from 'type-fest';

/*
Can be used in place of Object.assign to merge objects together type safely, e.g.:

const obj1 = { a: 1, b: 2 } as const;
const obj2 = { b: 3, c: 4 } as const;
const merged = merge(obj1, obj2);
//    ^? 
*/

export type MergeArrayOfObjects<TArr extends readonly object[], T1 = object> = TArr extends [
	infer T2 extends object,
	...infer TRest extends object[],
]
	? MergeArrayOfObjects<TRest, Merge<T1, T2>>
	: T1

export function merge<TArr extends readonly object[]>(...objects: TArr): MergeArrayOfObjects<TArr> {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return -- this func is to fix the unsafe type of Object.assign
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
Strips all null, undefined, or empty string properties from a type / object
*/

export type Valuable<T extends object> = ConditionalExcept<T, undefined | null | ''>;

export function removeEmpty<T extends object>(obj: T): Valuable<T> {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- I gave up typing this without casting
	return Object.fromEntries(
		Object
			.entries(obj)
			.filter(([ , v ]) => {
				if (typeof v === 'string') {
					if (v.trim() === '') return false;

					return true;
				} 

				return !(v === null || typeof v === 'undefined');
			})
	) as Valuable<T>;
}

/*
Returns only the specified properties from an object (like typescript's Pick utility)
*/

export function mask<T extends object, K extends keyof T>(obj: T, ...keys: K[]): PrettifyShallow<Pick<T, K>> {
	// TODO: fix this type
	// @ts-expect-error -- inputs and outputs should be correct, but I cannot be bothered to figure this out at the moment
	return keys.reduce<Pick<T, K>>((o, k) => ((o[k] = obj[k]), o), {});
}

/**
 * Returns a new object with the specified properties set to optional
 */

export type OptionalProps<T, K extends keyof T> = PrettifyShallow<Omit<T, K> & Partial<Pick<T, K>>>;