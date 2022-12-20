import React,{ useState } from "react";
import Axios from "axios";

function AddStaff() {
  const [staffname, setStaffname] = useState("");
  const [staffId, setStaffId] = useState(0);
  const [task, setTask] = useState("");
  const [doc,setDocs]=useState([]);


  function createStaff() {
    Axios.post("http://localhost:3001/createStaff", {
      staffname: staffname,
      staffId: staffId,
      task: task,
    });
    setStaffId(0);
    setStaffname("");
    setTask("");
    window.alert("amjilttai nemegdlee");
  }

  return (
    <div>
      <span>Shineer oruulah ajiltnii ner:</span>
      <input
        type="text"
        value={staffname}
        placeholder="Name"
        onChange={(e) => {
          setStaffname(e.target.value);
        }}
      />
      <br />
      <span>Shine id :</span>
      <input
        type="number"
        value={staffId}
        placeholder="Ajiltnii kod"
        onChange={(e) => {
          setStaffId(e.target.value);
        }}
      />
      <br />
      <span>Task oruulah</span>
      <input
        type="text"
        value={task}
        placeholder="Taskiin ner"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <br />
      <input type="button" value="Submit" onClick={createStaff} />
    </div>
  );
}

export default AddStaff;
