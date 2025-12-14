function QuokkaCharacter({ speech }) {
  return (
    <div className="card quokka" data-testid="quokka">
      <img src="/assets/quokka.svg" alt="Quokka mascot" />
      <div className="speech" data-testid="speech">
        {speech}
      </div>
    </div>
  );
}

export default QuokkaCharacter;
