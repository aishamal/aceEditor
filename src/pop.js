// import React, {useState} from 'react';

// import { Modal, ModalBody, ModalHeader } from "reactstrap";
// import data from "./mock-data.json";
// import { nanoid } from "nanoid";

// function Pop(){
//     const [modal, setModal] = useState(false)

//     const [contacts, setContacts] = useState(data);
//     const [addFormData, setAddFormData] = useState({
//       name: "",
//       type: "",
//       description: "",
//       editor: "",
//       status: "",
//     });

//     const handleAddFormChange = (event) => {
//         event.preventDefault();
    
//         const fieldName = event.target.getAttribute('name');
//         const fieldValue = event.target.value;
    
//         const newFormData = { ...addFormData };
//         newFormData[fieldName] = fieldValue;
    
//         setAddFormData(newFormData);
//       };
    
//       const handleAddFormSubmit = (event) => {
//         event.preventDefault();
    
//         const newContact = {
//           id: nanoid(),
//           name: addFormData.name,
//           type: addFormData.type,
//           description: addFormData.description,
//           editor: addFormData.editor,
//           status: addFormData.status,
//         };
    
//         const newContacts = [newContact];
//         setContacts(newContacts);
//       };

//     return(
//         <div>
//             <Modal
//             size='lg'
//             isOpen={modal}
//             toggle={()=>setModal(!modal)}>

//                 <ModalHeader>
//                     Popup
//                 </ModalHeader>

//                 <ModalBody>
                            
//                     <form onSubmit={handleAddFormSubmit}>
//                         <input
//                         type="text"
//                         name="name"
//                         required="required"
//                         placeholder="Name"
//                         onChange={handleAddFormChange}
//                         />
//                         <input
//                         type="text"
//                         name="type"
//                         required="required"
//                         placeholder="Type"
//                         onChange={handleAddFormChange}
//                         />
//                         <input
//                         type="text"
//                         name="description"
//                         placeholder="Description"
//                         onChange={handleAddFormChange}
//                         />
//                         <input
//                         type="text"
//                         name="editor"
//                         required="required"
//                         placeholder="Editor"
//                         onChange={handleAddFormChange}
//                         />
//                         <input
//                         type="text"
//                         name="status"
//                         required="required"
//                         placeholder="Status"
//                         onChange={handleAddFormChange}
//                         />
//                         <button type="submit">Add</button>
//                     </form>


//                 </ModalBody>
                
                
//             </Modal>
//             <button className="btn mt-3" style={{backgroundColor: "black", color: "white"}} onClick={()=>setModal(true)}>
//                 Add element
//             </button>
//         </div>
//     )
// }
// export default Pop;