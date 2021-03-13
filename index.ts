import FileGetter from "./src/fileGetter";
import {PathLike} from "fs";

class Main {
    private path: PathLike;

    constructor(path: PathLike) {
        this.path = path;
    }

    on(){
        const fileGetter = new FileGetter(this.path).on();
    }
}

const main = new Main("PATH_TO_DIR").on();