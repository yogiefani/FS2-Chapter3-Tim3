const fs = require('fs').promises;

async function rewriteAndReadFile() {
    const filePath = "./index.txt";
    const newContent = 'This text is written by Muria\n';

    try {
        // Tulis ulang konten baru ke file
        await fs.writeFile(filePath, newContent);

        // Baca kembali isi file setelah diubah
        const updatedFileContent = await fs.readFile(filePath, 'utf-8');

        return updatedFileContent;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Terjadi kesalahan saat memproses permintaan Muria.');
    }
}

module.exports = rewriteAndReadFile;
