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

module.exports = {
    rewriteFromYogi
};