import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div className="gajraj">
        <h1>GAJRAJ RESTAURANT</h1>
      </div>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem, index) => {
            return (
              <button
                key={index}
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
      
    </>
  );
};

export default navbar;