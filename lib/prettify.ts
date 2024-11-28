/*
Will show the properties of types when hovered instead of just showing their names
*/

// This works on nested objects, but also expands classes such as builtin Date, which might not be what you want
export type Prettify<T> = {
	[K in keyof T]: T[K] extends object ? Prettify<T[K]> : T[K]
} & unknown

// This does not work on nested objects, but does not expand classes
export type PrettifyShallow<T> = {
	[K in keyof T]: T[K]
} & {}