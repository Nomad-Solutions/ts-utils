/*
Will take a number and return a string with the number formatted with a thousands separator and a decimal point for danish locale
*/

type StringNumericLiteral = `${number}` | 'Infinity' | '-Infinity' | '+Infinity'

const numberFormatter = new Intl.NumberFormat('da-DK');

export function formatNumber(num: number, decimals: number = 2): string {
	return numberFormatter.format(num.toFixed(decimals) as StringNumericLiteral);
}
