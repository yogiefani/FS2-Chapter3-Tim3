const fsAsync = require("fs").promises;

async function rewriteFromNuril(filepath, content) {
    try {
        await fsAsync.writeFile(filepath, content);
        console.log("sukses nulis ulang file");
        const resultRewrite = await fsAsync.readFile(filepath, "utf-8");
        console.log(resultRewrite);
        return resultRewrite; 
    } catch (error) {
        console.log(error);
    }
}

async function addTextFromNuril(filepath, content) {
    try{
        await fsAsync.appendFile(filepath, content);
        const addCheck = await fsAsync.readFile(filepath, "utf-8");
        console.log(addCheck);
        return addCheck;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    rewriteFromNuril,
    addTextFromNuril
};