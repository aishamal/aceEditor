import React, { useState } from 'react';
import AceEditor from 'react-ace';


function Ace() {
  const [code, setCode] = useState('');
  return (
  

    <div >
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <AceEditor
        mode="javascript"
        theme="github"
        onChange={setCode}
        value={code}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}

export default Ace;
