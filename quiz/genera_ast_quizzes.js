const fs = require("fs");
const acorn = require("acorn");
const walk = require("acorn-walk");
const { exit } = require("process");
const files = fs.readFileSync("quiz-ls.txt", "utf-8").split("\n");
const quizzes = [];
var geval = eval;

/**
 * Convert from HTML to plain text
 *
 * @param {string} h the HTML string
 * @returns {string} the h inner text
 */
function html2text(h) {
  if (typeof h != "string") console.error(h, typeof h);
  let pt = h
    // elimina gli stili
    .replace(/<style([\s\S]*?)<\/style>/gi, "")
    // elimina gli script
    .replace(/<script([\s\S]*?)<\/script>/gi, "")
    //.replace(/(<(?:.|\n)*?>)/gm, "")
    // elimina spazi multipli
    .replace(/\s+/gm, " ")
    // italic
    .replace(/<[/]*i\s*>/gm, "")
    // bold
    .replace(/<[/]*b\s*>/gm, "")
    // pre
    .replace(/<[/]*pre\s*>/gm, "")
    // img
    .replace(/<img\s[^>]*>/gm, "")
    // &agrave;
    .replace(/&agrave;/gi, "à")
    // &eacute;
    .replace(/&eacute;/gi, "é")
    // &egrave;
    .replace(/&egrave;/gi, "è")
    // &ograve;
    .replace(/&ograve;/gi, "ò")
    // &ugrave;
    .replace(/&ugrave;/gi, "ù")
    // &ndash; &lt; &gt;
    .replace(/&ndash;/gi, "-")
    // &lt;
    .replace(/&lt;/gi, "<")
    // &gt;
    .replace(/&gt;/gi, ">")
    // ritorni a capo
    .replace(new RegExp("<br\\s*[/]*>", "gm"), "\n");
  // Non è possibile eliminare ogni altro tag perché si confonde con
  // file di inclusione
  // .replace(/<[^>]+>/gm, "");

  return pt;
}

files.forEach((f) => {
  if (f == "") return;
  const volAndCapRE = /.*Vol([3-5]).*Capitolo([0-9]+)/;
  const volAndCap = f.match(volAndCapRE);
  try {
    const vol = volAndCap[1];
    const cap = volAndCap[2];
    //console.log(`${f} - vol: ${vol} - cap: ${cap}`);
    const buffer = fs.readFileSync(f).toString();
    const parsed = acorn.parse(buffer, {
      allowHashBang: false,
      ecmaVersion: 5,
      ranges: true,
      //sourceFile: true,
    });
    walk.full(parsed, (node) => {
      if (node.type == "VariableDeclaration") {
        if (node.declarations[0].id.name == "quizMulti") {
          geval(buffer.substring(node.range[0], node.range[1]));
          // console.log(quizMulti);
        } else if (node.declarations[0].id.name == "options") {
          geval(buffer.substring(node.range[0], node.range[1]));
          //quizzes[quizzes.length - 1].titolo = options.title;
          //console.log(options.title);
        }
      }
    });
    quizzes.push({
      baseDir: f.substring(2, f.lastIndexOf("/js")),
      // httpsImageDir: f.substring(0, f.lastIndexOf("/js")) + "/images",
      classe: vol,
      capitolo: cap,
      titolo:
        "Classe " + vol + " cap. " + html2text(options.title).split("\n")[1],
      descrizione: html2text(options.title),
      quizMulti: quizMulti,
    });
  } catch (e) {
    console.error(f);
    console.error(e);
    exit(1);
  }
});

const imageSrcAndWidthRE = new RegExp(
  "<br\\s*/> <img src='(images/.*.png)'\\s*width='([0-9]+)'\\s*/>"
);

quizzes.forEach((quiz) => {
  Object.keys(quiz.quizMulti).forEach((k) => {
    quiz.quizMulti[k].forEach((quizStructure) => {
      if (quizStructure.ques.indexOf("<img src='") != -1) {
        let matches = quizStructure.ques.match(imageSrcAndWidthRE);
        const path = quiz.baseDir + "/" + matches[1];
        // const buffer = fs.readFileSync(path);
        //quizStructure.image = buffer.toString("base64");
        quizStructure.url = `https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/${path}/`;
      }
    });
  });
});

quizzes.forEach((q) => {
  for (t of Object.keys(q.quizMulti)) {
    let quizGroupArray = q.quizMulti[t];
    quizGroupArray.forEach((item) => {
      for (k of Object.keys(item)) {
        if (typeof item[k] == "string") {
          item[k] = html2text(item[k]);
        } else if (Array.isArray(item[k])) {
          for (ans of item[k]) ans = html2text(ans);
        }
      }
    });
  }
});
//return 0;
console.log(JSON.stringify(quizzes, null, 2));
