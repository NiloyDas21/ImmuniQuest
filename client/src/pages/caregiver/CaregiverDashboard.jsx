import { initialData } from '../../data/mockData.js';
import { useState } from 'react';
import ChildCard from '../../components/ChildCard.jsx';
import AddChildForm from '../../components/child/AddChildForm.jsx';

function CaregiverDashboard(){
  //UI updation is done by react only, and for that purpose we use hooks- here useState
  //this controls whether the registration form is visible or not

  const [showform,setshowForm] = useState(false)
  const [children,setChildren] = useState(initialData)


  function addChild(newChild){
    setChildren((prevChild) => [...prevChild,newChild]);
    setshowForm(false);
  }
  function deleteChild(childName){
    const updateChildren = children.filter((child) =>{
        return child.name !== childName
    })

  setChildren(updateChildren);
}

  return (
    <div className="parent-card">
      <h1>ImmuniQuest</h1>
      <p>Welcome back! Manage your children's vaccination records.</p>
      <div className="children-container">
        <h2>Your children</h2>
        <div className="children-grid">
          {children.map((child) => {
          return (
            <ChildCard
              key = {child.name}
              child ={child}
              onDelete={deleteChild}
            />
          )
        })}
        </div>
        <div className='form-container'>
          <button onClick={() => {setshowForm(!showform)}}>
          + Addchild
        </button>
        {showform && (
          <AddChildForm
          onAddChild={addChild}
          />
        )}
        </div>

      </div>
  
    </div>
  )
}

export default CaregiverDashboard;


//key is used to identify each child uniquely