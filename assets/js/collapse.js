function openCollapse() {
  let question = document.getElementsByClassName('question-text')

  if (question.class) {
    question.style.display = 'flex';
  }
}
let btn = document.getElementById('questions-btn');
btn.addEventListener('click', openCollapse);