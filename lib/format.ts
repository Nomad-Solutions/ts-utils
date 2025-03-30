//* DATE

/*
Can be used to get an ISO date string in the format YYYY-MM-DD from a Date.

When using the type, any separator can be used, but the default is '-'.
Any other separators than '-' must explicitly be passed as type arguments.
*/

export type ISODateString<Sep1 extends string = '-', Sep2 extends string = '-'> =
	`${number}${number}${number}${number}${Sep1}${number}${number}${Sep2}${number}${number}`

export function getISODateString(date: Date | string): string {
	return new Date(date)
		.toISOString()
		.split('T')[0];
}

export function getTZStrippedISODateString(date: Date | string): string {
	const d = new Date(date);

	return getISODateString(new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())));
}

/*
Tells you if a date is before another date / before today
*/

export function dateBefore(date1: Date | string, date2: Date | string): boolean {
	// If date 1 is before date 2
	return new Date(date1) < new Date(date2);
}

export function dateInPast(date: Date | string): boolean {
	return new Date(date) < new Date();
}

/*
Converts a date into a string with the format 'DD-MM-YYYY' for Danish locale
*/

export function formatDKDate(date: Date | string): string {
	return new Date(date)
		.toLocaleDateString('da-DK', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});
}

/*
Converts a date into a string with the format 'DD-MM-YYYY HH:MM' for Danish locale
*/

export function formatDKDateTime(date: Date | string): string {
	return new Date(date)
		.toLocaleDateString('da-DK', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		});
}

/*
Converts date into a string with the format 'HH.MM' for Danish locale
*/
const timeFormatter = new Intl.DateTimeFormat('da-DK', {
	hour: '2-digit',
	minute: '2-digit',
});

export function formatDKTime(date: Date | string): string {
	return timeFormatter.format(new Date(date));
}

/*
Formats a number as a currency string in DKK
*/

const currencyFormatter = new Intl.NumberFormat('da-DK', {
	style: 'currency',
	currency: 'DKK',
});

export function formatDKK(amount: number): string {
	return currencyFormatter.format(amount);
}

//* NUMBER

/*
Will take a number and return a string with the number formatted with a thousands separator and a decimal point for danish locale
*/

type StringNumericLiteral = `${number}` | 'Infinity' | '-Infinity' | '+Infinity'

const numberFormatter = new Intl.NumberFormat('da-DK');

export function formatNumber(num: number, decimals = 2): string {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	return numberFormatter.format(num.toFixed(decimals) as StringNumericLiteral);
}