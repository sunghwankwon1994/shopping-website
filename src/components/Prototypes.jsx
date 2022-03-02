// components/Prototypes.jsx

import usePrototypes from "../hooks/usePrototypes";
import useActions from "../hooks/useActions";

export default function Prototypes() {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, image, title, price, desc, seller } = prototype;
          const click = () => {
            addToOrder(id);
          };
          return (
            <div className="prototype" key={id}>
              <div
                style={{
                  padding: "25px 0 33px 0",
                }}
              >
                <img
                  className="prototype__artwork prototype__edit"
                  alt="productImage"
                  style={{
                    objectFit: "contain",
                  }}
                  src={image}
                />
              </div>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={click}
                  >
                    <i className="icon icon--plus" />
                  </div>

                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">seller: {seller}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
