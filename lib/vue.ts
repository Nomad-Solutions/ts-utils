/*
Can be used to type a prop that is supposed to be bound directly to a vue class attribute
*/

type VueClassBase = string | Record<string, boolean>
export type VueClassAttr = VueClassBase | VueClassBase[]