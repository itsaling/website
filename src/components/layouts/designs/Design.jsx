import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Design = () => {
  const { designs } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const showModal = (e) => {
    setShow(true);
    console.log(show);
  };

  return (
    <div className="design-container mt-lg">
      <h1 className="text-center ">Design Projects</h1>
      {designs.map((design) => (
        <div key={design.id} id={design.id}>
          <h2>
            {design.name} <i class="fas fa-arrow-down"></i>
          </h2>
          <div className="grid">
            {Object.keys(design.images).map((image) => (
              <div key={image}>
                <img
                  src={design.images[image]}
                  alt="somehting"
                  onClick={(e) => showModal()}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Design;
