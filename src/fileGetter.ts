import {PathLike, readdirSync} from 'fs'
import * as fs from "fs";
import {classRegex} from "../types/regex";

export default class FileGetter {

    private path: PathLike;

    constructor(path: PathLike) {
        this.path = path;
    }

    public async on() {
        if (this.path) {

            const files: String[] = readdirSync(this.path.toString()).filter(e => e.endsWith(".ts"));
            let data: String[] = [];
            for (let file of files) {
                data.push(...fs.readFileSync(`${this.path}/${file}`, 'utf-8').toString().match(classRegex).map(e => (
                    e.split(" ")[1]
                )));
            }
            console.log(data)
        } else {
            throw new Error("no path in FileGetter");
        }
    }
}