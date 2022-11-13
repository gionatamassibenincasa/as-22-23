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
console.log(JSON.stringify(quizzes, null, 2));
