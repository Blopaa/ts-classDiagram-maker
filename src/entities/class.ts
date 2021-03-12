export default class ClassEntity {
    private _name: string;
    private _dependencies: string[];
    private _extends: string[];


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get dependencies(): string[] {
        return this._dependencies;
    }

    set dependencies(value: string[]) {
        this._dependencies = value;
    }

    get extends(): string[] {
        return this._extends;
    }

    set extends(value: string[]) {
        this._extends = value;
    }
}