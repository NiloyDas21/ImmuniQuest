import { getAge } from "../utils/calculateAge.js"

function ChildCard({child,onDelete}){
    return (
                <div className="child-card" key={child.name}>
                  <img src = {child.image} alt={child.name}/>
                  <h2>{child.name}</h2>
                  <p>Age:{getAge(child.dob)}</p>
                  <p>DOB:{child.dob}</p>
                  <p>Vaccination status:{child.vaccination}</p>
                  <button onClick={() => onDelete(child.name)}>
                    Delete Entry</button>
                  
                </div>
              )
}

export default ChildCard;