const fs = require("fs").promises;

async function rewriteFromAbdi() {
  const filepath = "./index.txt";
  const content = "Rewritten by Abdi";

  try {
    // Rewrite file
    await fs.writeFile(filepath, content);

    // Read updated file
    const updatedContent = await fs.readFile(filepath, "utf-8");

    // Return updated content
    return updatedContent;
  } catch (error) {
    // Handle any errors that occur during file write/read operations
    console.error("Error occurred while processing Abdi's request:", error);

    // Return a user-friendly error message
    return "An error occurred while processing your request.";
  }
}

module.exports = rewriteFromAbdi;
