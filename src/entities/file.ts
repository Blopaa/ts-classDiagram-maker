import ClassEntity from "./class";

export default class FileEntity {
    private _clases: ClassEntity[] = [];

    get clases(): ClassEntity[] {
        return this._clases;
    }

    set clases(value: ClassEntity[]) {
        this._clases = value;
    }
}