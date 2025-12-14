import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

describe('App scaffold', () => {
  it('renders the main title', () => {
    render(<App />);
    expect(screen.getByText('쿼카와 함께하는 Cypher 게임')).toBeInTheDocument();
  });

  it('shows quokka character with speech bubble', () => {
    render(<App />);
    expect(screen.getByTestId('quokka')).toBeInTheDocument();
    expect(screen.getByTestId('speech')).toHaveTextContent('오늘도 그래프 우주로 출발!');
  });

  it('displays the first question from questions.json', () => {
    render(<App />);
    expect(
      screen.getByText('다음 MATCH 패턴에서 방향성이 의미하는 것은 무엇인가요?')
    ).toBeInTheDocument();
  });
});
