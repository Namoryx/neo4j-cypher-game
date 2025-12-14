import { useState } from 'react';

function McqOptions({ options = [] }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={option}
          type="button"
          className={`option-button${selected === index ? ' selected' : ''}`}
          onClick={() => setSelected(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default McqOptions;
