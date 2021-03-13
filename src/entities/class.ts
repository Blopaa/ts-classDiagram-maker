export default class ClassEntity {
    private _name: string;
    private _dependencies: string[] = [];
    private _classDependencies: string[] = [];


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

    get classDependencies(): string[] {
        return this._classDependencies;
    }

    set classDependencies(value: string[]) {
        this._classDependencies = value;
    }
}