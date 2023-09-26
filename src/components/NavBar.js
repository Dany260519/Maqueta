import React, { useState } from "react"
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { listButtons, menuFirst, menuSecond } from "./ListMenu";

const NavBar = () => {

  const [expandedId, setExpandedId] = useState(null);

  const toggleSecondObjects = (buttonId) => {
    if (expandedId === buttonId) {
      setExpandedId(null);
    } else {
      setExpandedId(buttonId);
    }
  };



  return (
    <div>
      <div>
        <h3>{menuFirst.title}</h3>
        {
          menuFirst.objects.map((object,index) => 
            <div>
              <a key={index}>{object}</a>
              <br></br>
            </div>
          )
        }
      </div>

      <hr></hr>

      <div>
        <h3>{menuSecond.title}</h3>
        {
          menuSecond.objects.map((object,index) => 
            <div>
              <a key={index}>{object} <FaAngleRight /></a>
              <br></br>
            </div>
          )
        }
      </div>

      <hr></hr>

      {listButtons.map((listButton) => (
        <div key={listButton.id}>
          <h2>{listButton.title}</h2>
          <ul>
            {listButton.links.map((link) => (
              <li key={link}>{link} <FaAngleRight /></li>
            ))}
          </ul>
          
          {expandedId === listButton.id ? (
            <div>
              <ul>
                {listButton.secondObjects.map((secondObject, index) => (
                  <li key={index}>{secondObject} <FaAngleRight /> </li>
                ))}
              </ul>
              <a href="#" onClick={() => toggleSecondObjects(listButton.id)}>
                {listButton.seeLess} <FaAngleUp />
              </a>
              <hr></hr>
            </div>
          ) : (
            <a href="#" onClick={() => toggleSecondObjects(listButton.id)}>
              {listButton.button} <FaAngleDown />
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

export default NavBar