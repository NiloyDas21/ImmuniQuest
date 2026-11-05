import { useState } from "react";

function AddChildForm({onAddChild}){
    const [name,setName] = useState("");
    const [dob,setDob] = useState("");
    const [vaccination,setVaccination] = useState("");
    const [image,setImage] = useState(null);


    function AddChild(e){
    e.preventDefault();
    const newChild = {
      name:name,
      dob:dob,
      vaccination:vaccination,
      image:image
    }

    onAddChild(newChild)

    setName("")
    setDob("")
    setVaccination("")
    setImage(null)

  }
    return (
          <div className="myform">
            <h3> Register a child</h3>
            <form onSubmit={AddChild}>
            <input
            type='text'
            placeholder = "Child's name"
            value = {name}
            onChange={(e) => (setName(e.target.value))}
            />
            <input
            type = "date"
            placeholder="YYYY-MM-DD"
            value = {dob}
            onChange={(e) => (setDob(e.target.value))}
            />
            <input
            type = "text"
            placeholder = "Enter vaccine Name"
            value = {vaccination}
            onChange={(e) => (setVaccination(e.target.value))}
            />
            <input
            type = "file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file?URL.createObjectURL(file):null)
            }}
            />
            <button type="submit">Submit</button>
            </form>
          </div>
        )
}

export default AddChildForm