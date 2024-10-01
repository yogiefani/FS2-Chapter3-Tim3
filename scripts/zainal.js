const fs = require('fs').promises;

async function rewriteFromZainal(filepath, content) {
  try {
    await fs.writeFile(filepath, content);
    console.log("Successfully rewrote file from Zainal");
    const resultRewrite = await fs.readFile(filepath, 'utf-8');
    return resultRewrite;
  } catch (error) {
    console.error("Error in Zainal's function:", error);
    throw error;
  }
}

module.exports = rewriteFromZainal;