/*
Can be used to get an ISO date string in the format YYYY-MM-DD from a Date.

When using the type, any separator can be used, but the default is '-'.
Any other separators than '-' must explicitly be passed as type arguments.
*/

export type ISODateString<Sep1 extends string = '-', Sep2 extends string = '-'> =
	`${number}${number}${number}${number}${Sep1}${number}${number}${Sep2}${number}${number}`

export function getISODateString(date: Date): ISODateString {
	return date.toISOString().split('T')[0] as ISODateString;
}

/*
Tells you if a date is before another date / before today
*/

export function dateBefore(date1: string, date2: string): boolean {
	// If date 1 is before date 2
	return new Date(date1) < new Date(date2);
}

export function dateInPast(date: string): boolean {
	return new Date(date) < new Date();
}
