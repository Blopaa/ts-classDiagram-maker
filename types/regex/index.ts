export const multipleRegex: RegExp = new RegExp(/(class [A-Za-z0-9]{1,})|((extends|implements) [A-Za-z0-9]{1,}|,[ ]{0,}[A-Za-z0-9]{1,})/g);
export const classRegex: RegExp = new RegExp(/class [A-Za-z0-9]{1,}/g)
export const classDependenciesRegex: RegExp = new RegExp(/((extends|implements) [A-Za-z0-9]{1,})|(,[ ]{0,}[A-Za-z0-9]{1,})/g);