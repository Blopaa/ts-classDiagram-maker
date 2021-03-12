import {PathLike, readdirSync} from 'fs'
import * as fs from "fs";
import {classRegex} from "../types/regex";
import ClassEntity from "./entities/class";
import FileEntity from "./entities/file";

export default class FileGetter {

    private readonly path: PathLike;

    constructor(path: PathLike) {
        this.path = path;
    }

    public async on() {
        if (this.path) {

            const files: String[] = readdirSync(this.path.toString()).filter(e => e.endsWith(".ts"));
            let data: FileEntity[] = [];
            for (let file of files) {
                let newFile = new FileEntity();
                fs.readFileSync(`${this.path}/${file}`, 'utf-8').toString().match(classRegex).map(e => {
                    let newClass = new ClassEntity();
                    newClass.name = e.split(" ")[1];
                    newFile.clases.push(newClass);
                });
                data.push(newFile);
            }
            console.log(data)
        } else {
            throw new Error("no path in FileGetter");
        }
    }
}