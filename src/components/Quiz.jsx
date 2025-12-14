import questions from '../data/questions.json';
import QuestionCard from './QuestionCard.jsx';

function Quiz() {
  const currentQuestion = questions[0];

  return (
    <div className="card quiz-card">
      <p className="subtitle">그래프 문제 세트 · 프리뷰</p>
      <QuestionCard question={currentQuestion} />
    </div>
  );
}

export default Quiz;
