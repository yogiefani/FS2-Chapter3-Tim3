const fsAsync = require("fs").promises;

async function rewriteFromYogi(filePath, content) {
    try {
        await fsAsync.writeFile(filePath, content);
        console.log("Success to rewrite file index.txt");
        const resultRewrite = await fsAsync.readFile(filePath, "utf-8");
        return resultRewrite
    } catch (error) {
        console.log(error);
    }
    
}

async function addTextFromYogi(filePath, content) {
    try {
        await fsAsync.appendFile(filePath, content);
        console.log("Success to add additional text in index.txt");
        const resultAdd = await fsAsync.readFile(filePath, content);
        return resultAdd
    } catch (error) {
        console.log(error);
    }
    
}

async function createYogiFile(filePath, content){
    try {
        await fsAsync.access(filePath);
        console.log("File yogi.txt already exist bro, Reading it's content");
        const canRead = await fsAsync.readFile(filePath, "utf-8");
        return canRead;
    } catch (error) {
        try {
            await fsAsync.appendFile(filePath, content);
            console.log("Success create new file that is yogi.txt")
            const checkFile = await fsAsync.readFile(filePath, "utf-8");
            return checkFile;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {
    rewriteFromYogi,
    addTextFromYogi,
    createYogiFile
};