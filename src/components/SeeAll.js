import React, { useState } from "react";

const ListButtonsComponent = () => {
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
      {listButtons.map((listButton) => (
        <div key={listButton.id}>
          <h2>{listButton.title}</h2>
          <ul>
            {listButton.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
          {expandedId === listButton.id ? (
            <div>
              <ul>
                {listButton.secondObjects.map((secondObject, index) => (
                  <li key={index}>{secondObject}</li>
                ))}
              </ul>
              <a href="#" onClick={() => toggleSecondObjects(listButton.id)}>
                {listButton.seeLess}
              </a>
            </div>
          ) : (
            <a href="#" onClick={() => toggleSecondObjects(listButton.id)}>
              {listButton.button}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListButtonsComponent;
