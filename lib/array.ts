/*
When given an array type, will return the type of the array's elements
*/

export type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[]
	? ElementType
	: never

/* 
Takes an array and the index to move element from and the index to move element to in the original array
*/

export function arrayMoveInPlace<T>(arr: T[], from: number, to: number) {
	const e = arr[from];
	arr.splice(from, 1);
	arr.splice(to, 0, e);
}

/*
Takes an array and the index to move element from and the index to move element to and returns the result as a new shallow copied array
*/

export function arrayMove<T>(arr: T[], from: number, to: number): T[] {
	const shallowCopy = [ ...arr ];

	arrayMoveInPlace(shallowCopy, from, to);

	return shallowCopy;
}

/*
Puts value in an array if it's not already an array
*/

export function arrayWrap<T>(val: T | T[]): T[] {
	return Array.isArray(val) ? val : [ val ];
}

/*
Returns a new array with only the unique values from the original array
*/

export function unique<T>(arr: T[]): T[] {
	return Array.from(new Set(arr));
}

/*
Counts the different values in an array
*/

export function countArrayItems<T>(arr: T[]): Map<T, number> {
	return arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
}

/*
Tells you how many times a specific value is in an array
*/

export function countArrayItem<T>(arr: T[], item: T): number {
	return countArrayItems(arr).get(item) || 0;
}

/*
Tells you if there are no duplicates in an array
*/

export function arrayItemsAreUnique<T>(arr: T[]): boolean {
	return arr.length === new Set(arr).size;
}
