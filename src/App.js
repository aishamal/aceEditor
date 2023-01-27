import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
 import data from "./mock-data.json";
import Pop from "./pop.js";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import AceEditor from 'react-ace';
// import Ace from "./components/ace.js";
import ace from "ace-builds";


function App() {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    type: "",
    description: "",
    editor: "",
    status: "",
  });

  const [code, setCode] = useState('');

  const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        name: addFormData.name,
        type: addFormData.type,
        description: addFormData.description,
        editor: addFormData.editor,
        status: addFormData.status,
      };
  
      const newContacts = [newContact];
      setContacts(newContacts);
    };

  return ( 
    <div className="app-container">

      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Editor</th>
              <th>Status</th>
              {/* <th>hi</th> */}
            </tr>
          </thead>
            <tbody>
            {contacts.map((contact) => (
                <tr>
                  <td>{contact.name}</td>
                  <td>{contact.type}</td>
                  <td>{contact.description}</td>
                  <td>{contact.editor}</td>
                  <td>{contact.status}</td>
                </tr>
            ))} 
          </tbody>
        </table>
      </form>

      <form style={{ display: "grid", gridTemplateColumns: "1fr", width:'300px'}} onSubmit={handleAddFormSubmit}>
          <input
          type="text"
          name="name"
          required="required"
          placeholder="Name"
          onChange={handleAddFormChange}
          />
          <input
          type="text"
          name="type"
          required="required"
          placeholder="Type"
          onChange={handleAddFormChange}
          />
          
          {/* <Ace name="description"/> */}
          
          <AceEditor
          mode="python"
          theme="github"
          name='editor'
          fontSize={30}
          onChange={setCode}
          value={code}
          editorProps={{ $blockScrolling: true }}
          onSelectionChange={handleAddFormChange}
          onSubmit={handleAddFormChange}
        />

      <div>
          <div id="editor"></div>
          <script>

            let editor = ace.edit("editor");

            let customKeywords = ["customFunction1", "customFunction2", "customVariable1", "customVariable2"];

            let customTokenizer = function(text) {
              let keywords = customKeywords;
              let tokens = [];

              // Split the text into words
              let words = text.split(/\b/);

              // Iterate over the words
              for (let i = 0; i < words.length; i++) {
                  // Check if the word is a keyword
                  if (keywords.indexOf(words[i]) !== -1) {
                      // Add the keyword token
                      tokens.push({type: "keyword", value: words[i]});
                  } else {
                      // Add the word token
                      tokens.push({type: "word", value: words[i]});
                  }
              }

              return tokens;
          };

      editor.getSession().setTokenizer(customTokenizer);

      </script>
    </div>

        <input
          type="text"
          name="description"
          required="required"
          placeholder="Status"
          onChange={handleAddFormChange}
          />
         
          <input
          type="text"
          name="status"
          required="required"
          placeholder="Status"
          onChange={handleAddFormChange}
          />
          <button type="submit" style={{width:'200px'}}>Add</button>
      </form>      

    </div>
  );
};

export default App;
