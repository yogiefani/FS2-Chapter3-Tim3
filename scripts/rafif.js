const fsAsync = require("fs").promises;

async function rewriteFromRafif(filepath, content) {
    try {
        await fsAsync.writeFile(filepath, content);
        console.log("Success to rewrite index.txt");
        const resultRewrite = await fsAsync.readFile(filepath, "utf-8");
        return resultRewrite;
    } catch (error) {
        console.log(error);
    }
}

async function addTextFromRafif(filepath, content) {
    try {
        await fsAsync.appendFile(filepath, content);
        console.log("Success to add text in index.txt");
        const resultAdd = await fsAsync.readFile(filepath, "utf-8");
        return resultAdd;
    } catch (err) {
        console.log(err);
    }
}

async function createRafifFile(filepath, content) {
    try {
        await fsAsync.access(filepath);
        console.log("File rafif.txt already exists. Reading it's content");
        const createRead = await fsAsync.readFile(filepath, "utf-8");
        return createRead;
    } catch (err) {
        try {
            await fsAsync.appendFile(filepath, content);
            console.log("Success to create rafif.txt file");
            const createCheck = await fsAsync.readFile(filepath, "utf-8");
            return createCheck;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = {
    rewriteFromRafif,
    addTextFromRafif,
    createRafifFile,
};