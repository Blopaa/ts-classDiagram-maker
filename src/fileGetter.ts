import {PathLike, readdirSync} from 'fs'
import * as fs from "fs";
import {classRegex, extendRegex, multipleRegex} from "../types/regex";
import ClassEntity from "./entities/class";
import FileEntity from "./entities/file";

export default class FileGetter {

    private readonly path: PathLike;

    constructor(path: PathLike) {
        this.path = path;
    }

    /**
     *
     * @param path - PathLike - the path to the dir
     * @return string[][] - multidimensional array of [file, path-to-file]
     * @private
     */

    private getFiles(path: PathLike): string[][] { //get all files in given path
        let files: string[][] = [];
        readdirSync(path.toString(), "utf-8").forEach(file => {
                if (fs.statSync(`${path}/${file}`).isDirectory()) {
                    files.push(...this.getFiles(`${path}/${file}`))
                }else{
                    files.push([file, `${path.toString()}/${file}`])
                }
            }
        );
        return files
    }

    public async on() {
        if (this.path) {
            let data: FileEntity[] = [];
            let files: string[][] = this.getFiles(this.path).filter(e => e[0].endsWith('.ts')); //filter all ts files

            for (let file of files) {
                let newFile = new FileEntity();
                let matches = fs.readFileSync(file[1], 'utf-8').toString().match(multipleRegex); //filter all file with regex

                matches.forEach ((e, i) => { //iterates regex matches

                    if (e.match(classRegex)) { //if is a class

                        let newClass = new ClassEntity();
                        newClass.name = e.split(" ")[1]; //exclude class

                        if (matches[i+1] && matches[i + 1].match(extendRegex)) { //if next index is extends of the class
                            let e = i + 1;
                            do {
                                if (!matches[e].match(classRegex)) {
                                    newClass.extends.push(matches[e].split(' ')[1]); //exclude extends or ,
                                } else {
                                    break;
                                }
                                e++;
                            } while (matches[e] && matches[e].match(extendRegex) && !matches[e].match(classRegex))

                        }

                        newFile.clases.push(newClass);

                    }

                })
                data.push(newFile);
            }
            // console.log(JSON.stringify(data)) //show data
        } else {
            throw new Error("no path in FileGetter");
        }
    }
}