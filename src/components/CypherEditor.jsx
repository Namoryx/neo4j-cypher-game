import { useState } from 'react';

function CypherEditor() {
  const [value, setValue] = useState('');

  return (
    <div className="cypher-editor">
      <label htmlFor="cypher-input" className="subtitle">
        Cypher 작성
      </label>
      <textarea
        id="cypher-input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="여기에 MATCH 패턴을 적어 보세요"
      />
    </div>
  );
}

export default CypherEditor;
