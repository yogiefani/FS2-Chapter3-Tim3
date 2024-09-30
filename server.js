const http = require("http");
const fs = require("fs");
const url = require("url");
const melindaFunc = require("./scripts/melinda.js");
const { rewriteFromNuril, addTextFromNuril } = require('./scripts/nuril.js');

const contentFileUtama = fs.readFileSync("./index.txt", "utf-8")

const app = http.createServer(async (req, res) => {
    console.log(req.url);
    const pathUrl = req.url;

    if (pathUrl === "/nuril") {
        const content = "this file got rewrite from Nuril";
        const updatedContent = await rewriteFromNuril("./index.txt", content);
        res.end(updatedContent);
    } else if (pathUrl === "/nuril/add") {
        const content = "\n- Adding New text from nuril222";
        const updatedContent = await addTextFromNuril("./index.txt", content);
        res.end(updatedContent);
    } else if (pathUrl === "/") {
        res.end("Hello, Welcome To Team 3!")        
    
    } else if (pathUrl === "/imam") {
        console.log("original data dari index.txt = " + contentFileUtama)
        async function rewriteFromImam(filepath, content) {
            try {
                await fsAsync.writeFile(filepath, content) 
                console.log("sukses nulis ulang file")
                const resultRewrite = await fsAsync.readFile(filepath, "utf-8")
                console.log(resultRewrite)
                res.end(resultRewrite)
            } catch (error) {
                console.log(error)
            }
        }

        rewriteFromImam("./index.txt", "HAI TUGAS IMAM !!!")
        
    } else if (pathUrl === "/melinda") {
        try {
            const result = await melindaFunc(contentFileUtama)
            res.end(result);
        } catch (err) {
            res.end('Error occurred while processing Melinda\'s request.');
        }
    }
    else {
        res.end("404 page not found")
    }
})

const port = 3000;

app.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`Click to open: \x1b[36m%s\x1b[0m`, url);
});
