function html2text(h) {
  let pt = h
    .replace(/<style([\s\S]*?)<\/style>/gi, " ")
    .replace(/<script([\s\S]*?)<\/script>/gi, " ")
    .replace(/(<(?:.|\n)*?>)/gm, " ")
    .replace(/\s+/gm, " ")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&ndash;/gi, "-")
    .replace(/&egrave;/gi, "è");
  return pt;
}

function creaModulo() {
  let form = FormApp.create("Quiz - Il linguaggio C++ - 3A SIA - AS 2020/2021");
  form.setCollectEmail(true);
  // Trasforma in quiz
  form.setIsQuiz(true);

  quizMulti.multiList.forEach((quesito) => {
    let item = form.addMultipleChoiceItem();
    item.setPoints(1);
    item.setTitle(html2text(quesito.ques));
    let scelte = [];
    scelte.push(item.createChoice(html2text(quesito.ans), true));
    quesito.ansSel.forEach((q) =>
      scelte.push(item.createChoice(html2text(q), false))
    );
    item.setChoices(scelte);
  });

  quizMulti.tf.forEach((quesito) => {
    let item = form.addMultipleChoiceItem();
    item.setPoints(1);
    item.setTitle(html2text(quesito.ques));
    let scelte = [];
    scelte.push(item.createChoice("Vero", quesito.ans));
    scelte.push(item.createChoice("Falso", !quesito.ans));
    item.setChoices(scelte);
  });

  quizMulti.fill.forEach((quesito) => {
    let item = form.addTextItem();
    item.setPoints(1);
    item.setTitle(html2text(quesito.ques));
  });

  Logger.log("Published URL: " + form.getPublishedUrl());
  Logger.log("Editor URL: " + form.getEditUrl());
}
