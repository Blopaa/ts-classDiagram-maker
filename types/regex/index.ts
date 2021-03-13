export const multipleRegex: RegExp = new RegExp(/(class [A-Za-z0-9]{1,})|(extends [A-Za-z0-9]{1,}|,[ ]{0,}[A-Za-z0-9]{1,})/g);
export const classRegex: RegExp = new RegExp(/class [A-Za-z0-9]{1,}/g)
export const extendRegex: RegExp = new RegExp(/(extends [A-Za-z0-9]{1,})|(,[ ]{0,}[A-Za-z0-9]{1,})/g);