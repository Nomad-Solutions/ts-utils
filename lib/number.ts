/*
Will take a number and return a string with the number formatted with a thousands separator and a decimal point for danish locale
*/

type StringNumericLiteral = `${number}` | 'Infinity' | '-Infinity' | '+Infinity'

const numberFormatter = new Intl.NumberFormat('da-DK');

export function formatNumber(num: number, decimals = 2): string {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	return numberFormatter.format(num.toFixed(decimals) as StringNumericLiteral);
}