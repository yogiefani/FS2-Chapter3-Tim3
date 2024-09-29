const fsAsync = require('fs').promises;

async function rewriteAndReadFile(contentFileUtama) {
    const filePath = "./index.txt";
    const newContent = 'This text is written by Melinda\n';

    try {
        // Tulis ulang konten baru ke file
        await fsAsync.writeFile(filePath, newContent);

        // Baca kembali isi file setelah diubah
        const updatedContent = await fsAsync.readFile(filePath, 'utf-8');

        // Gabungkan isi file sebelum dan sesudah diubah
        const responseContent = `Isi file asli sebelum diubah:\n${contentFileUtama}\n\nIsi file setelah diubah:\n${updatedContent}`;

        return responseContent;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error occurred while processing Melinda\'s request.');
    }
}

module.exports = rewriteAndReadFile;
