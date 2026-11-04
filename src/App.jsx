import arushimg from './assests/arush.png';
import niloyimg from './assests/gitprofilepic.jpeg';
import xyzimg from './assests/xyz.png';
import { useState } from 'react';

function App(){
  const [showform,setshowForm] = useState(false)
  //this controls whether the registration form is visible or not
  const [children,setChildren] = useState([{
      name:"Arush",
      age:"2 years",
      vaccination:"polio",
      profilepic:arushimg
    },

    {
      name:"Niloy",
      age:"22 years",
      vaccination:"none",
      profilepic:niloyimg
    }])


  return (
    <div className="parent-card">
      <h1>ImmuniQuest</h1>
      <p>Welcome back! Manage your children's vaccination records.</p>
      <div className="children-container">
        <h2>Your children</h2>
        <div className="children-grid">
          {children.map((child) => {
          return (
            <div className="child-card" key={child.name}>
              <img src = {child.profilepic} alt={child.name}/>
              <h2>{child.name}</h2>
              <p>Age :{child.age}</p>
              <p>Vaccination status:{child.vaccination}</p>
              
            </div>
          )
        })}
        </div>
        <button onClick={() => {setshowForm(true)}}>
          +Addchild
        </button>
        {showform && (
          <div>
            <h3>register a child</h3>
            <p>form coming soon</p>
          </div>
        )}

      </div>
  
    </div>
  )
}

export default App;


//key is used to identify each child uniquely