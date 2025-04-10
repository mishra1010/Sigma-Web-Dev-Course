import fs from "fs/promises"
import path from "path";
import fsn from "fs";

// console.log(fs)
const basepath = "c:\\FSD\\SigmaWebDev\\Sigma-Web-Dev-Course\\Day 93";

async function organizeFiles() {
    try {
        let files = await fs.readdir(basepath);
        console.log(files);
        for (const file of files) {
            console.log("running for ", file);
            let ext = file.split(".")[file.split(".").length - 1]
            if (ext != "js" && ext != "json" && ext != "gitignore" && file.split(".").length > 1) {
                if (fsn.existsSync(path.join(basepath, ext))) {
                    //move files to this directory
                    await fs.rename(path.join(basepath, file), path.join(basepath, ext, file))
                }
                else {
                    await fs.mkdir(path.join(basepath, ext));
                    await fs.rename(path.join(basepath, file), path.join(basepath, ext, file))
                }
                // console.log(file);
            }
        }
    } catch (err) {
        console.log(err);
    }
}
organizeFiles();