const http = require("http");
const fs = require("fs");
const fsAsync = require("fs").promises;
const url = require("url");
const melindaFunc = require("./scripts/melinda.js");
const fauzanFunc = require("./scripts/fauzan.js");
const rewriteFromAbdi = require("./scripts/abdi.js");
const rewriteFromMuria = require("./scripts/muria.js");
const { rewriteFromNuril, addTextFromNuril } = require("./scripts/nuril.js");
const { rewriteFromYogi, addTextFromYogi, createYogiFile } = require("./scripts/yogi.js");
const {
  rewriteFromRafif,
  addTextFromRafif,
  createRafifFile,
} = require("./scripts/rafif.js");
const rewriteFromZainal = require("./scripts/zainal.js");
const contentFileUtama = fs.readFileSync("./index.txt", "utf-8");

// create server
const app = http.createServer(async (req, res) => {
  console.log(req.url);
  const pathUrl = req.url;

  // path nuril
  if (pathUrl === "/nuril") {
    const content = "this file got rewrite from Nuril";
    const updatedContent = await rewriteFromNuril("./index.txt", content);
    res.end(updatedContent);
  } else if (pathUrl === "/nuril/add") {
    const content = "\n- Adding New text from nuril222";
    const updatedContent = await addTextFromNuril("./index.txt", content);
    res.end(updatedContent);
  // path imam
  } else if (pathUrl === "/imam") {
    console.log("original data dari index.txt = " + contentFileUtama);
    async function rewriteFromImam(filepath, content) {
      try {
        await fsAsync.writeFile(filepath, content);
        console.log("sukses nulis ulang file");
        const resultRewrite = await fsAsync.readFile(filepath, "utf-8");
        console.log(resultRewrite);
        res.end(resultRewrite);
      } catch (error) {
        console.log(error);
      }
    }
    rewriteFromImam("./index.txt", "HAI TUGAS IMAM !!!");
  // path melinda
  } else if (pathUrl === "/melinda") {
    try {
      const result = await melindaFunc(contentFileUtama);
      res.end(result);
    } catch (err) {
      res.end("Error occurred while processing Melinda's request.");
    }
  // path rafif
  } else if (pathUrl === "/rafif") {
    const content = "This file has been re-written by Rafif";
    const updatedContent = await rewriteFromRafif("./index.txt", content);
    res.end(updatedContent);
  } else if (pathUrl === "/rafif/add") {
    const content = "\nHow are you all today?";
    const updatedContent = await addTextFromRafif("./index.txt", content);
    res.end(updatedContent);
  } else if (pathUrl === "/rafif/rafif.txt") {
    const content = "Hello! You are in rafif.txt file";
    const createResult = await createRafifFile("./rafif.txt", content);
    res.end(createResult);

  // path fauzan
  } else if (pathUrl === "/fauzan") {
    try {
      const result = await fauzanFunc(contentFileUtama);
      res.end(result);
    } catch (err) {
      res.end("Error occurred while processing Fauzan's request.");
    }

  // path abdi 
  } else if (pathUrl === "/abdi") {
    try {
      const result = await rewriteFromAbdi();
      res.end(result);
    } catch (err) {
      res.end("Error occurred while processing Abdi's request.");
    }

  // path muria
  } else if (pathUrl === "/muria") { 
    try {
        const result = await rewriteFromMuria();
        res.setHeader('Content-Type', 'text/plain');
        res.end(result);
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error occurred while processing Muria\'s request.');
    }

  // path zainal
  } else if (pathUrl === "/zainal") {
    try {
      const content = "This file has been rewritten by Zainal";
      const result = await rewriteFromZainal("./index.txt", content);
      res.end(result);
    } catch (error) {
      console.error(error);
      res.end("Error occurred while processing Zainal's request.");
    }
  // default
  }else if(pathUrl === "/yogi"){
    const content = "This file has been rewritten by yogi cuy";
    const updatedContent = await rewriteFromYogi("./index.txt", content);
    res.end(updatedContent);
  }else if(pathUrl === "/yogi/add"){
    const content = "\nThis is additional text from path yogi add";
    const updatedContent = await addTextFromYogi("./index.txt", content);
    res.end(updatedContent);
  }else if(pathUrl === "/yogi/yogi.txt"){
    const content = "Hello, this new file (yogi.txt) created by yogi";
    const result = await createYogiFile("./yogi.txt", content);
    res.end(result);
  }else if (pathUrl === "/") {
    res.end("Hello, Welcome To Team 3!");
  } else {
    res.end("404 page not found");
  }
});

const port = 3000;
app.listen(port, () => {
  const url = `http://localhost:${port}`;
  console.log(`Click to open: \x1b[36m%s\x1b[0m`, url);
});