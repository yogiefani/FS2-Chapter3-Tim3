const fs = require('fs').promises;

async function rewriteFromZainal(filepath, content) {
    try {
        await fs.writeFile(filepath, content);
        console.log("File successfully rewritten by Zainal");
        const updatedContent = await fs.readFile(filepath, 'utf-8');
        return updatedContent;
    } catch (error) {
        console.error("Error in rewriteFromZainal:", error);
        throw error;
    }
}

async function addTextFromZainal(filepath, content) {
    try {
        const existingContent = await fs.readFile(filepath, 'utf-8');
        const updatedContent = existingContent + content;
        await fs.writeFile(filepath, updatedContent);
        console.log("Text successfully added by Zainal");
        return updatedContent;
    } catch (error) {
        console.error("Error in addTextFromZainal:", error);
        throw error;
    }
}

module.exports = {
    rewriteFromZainal,
    addTextFromZainal
};