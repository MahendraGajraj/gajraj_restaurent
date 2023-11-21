import React, { Fragment } from "react";


const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem, index) => {
          const { id, name, category, image, description,price } = curElem;

          return (
            <Fragment key={index}>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    
                    <span className="card-author subtle"> {category}</span>
                   
                    <h2 className="card-title "> {name} </h2>
                    <div className="card-price ">Price: {price} </div>
                    <span className="card-description subtle">
                      {description}
                    </span>
                   
                    <div className="card-read"></div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </Fragment>
          );
        })}
      </section>

    </>
  );
};

export default MenuCard;