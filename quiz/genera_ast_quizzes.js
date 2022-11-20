const fs = require("fs");
const acorn = require("acorn");
const walk = require("acorn-walk");
const { exit } = require("process");
const files = fs.readFileSync("quiz-ls.txt", "utf-8").split("\n");
const quizzes = [];
var geval = eval;
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
      titolo: options.title,
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

// TODO:
// Per ogni tipo di domanda, su ques, ans e ansSel:
//   1. Rimpiazzare <br> con \n
//   2. Convertire le entità: &agrave; &eacute; &egrave; &ograve; &ugrave; &ndash; &lt; &gt; ...
//   3. Eliminare i tag pre.
//   4. Eliminare tag rimanenti

quizzes.forEach((q) => {
  for (t of Object.keys(q.quizMulti)) {
    let quizGroupArray = q.quizMulti[t];
    quizGroupArray.forEach((item) => {
      for (stringKey of Object.keys(item)) {
        let txt;
        console.log(stringKey);
      }
    });
  }
});
return 0;
console.log(JSON.stringify(quizzes, null, 2));
