const fsAsync = require('fs').promises;

async function rewriteAndReadFile(contentFileUtama) {
    const filePath = "./index.txt";
    const newContent = 'This text is written by Fauzan\n';

    try {
        await fsAsync.writeFile(filePath, newContent);

        const updatedContent = await fsAsync.readFile(filePath, 'utf-8');

        const responseContent = `Isi file asli sebelum diubah:\n${contentFileUtama}\n\nIsi file setelah diubah:\n${updatedContent}`;

        return responseContent;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error occurred while processing Fauzan\'s request.');
    }
}

module.exports = rewriteAndReadFile;
