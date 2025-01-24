import React, { useState } from "react";

function Cell({ filled, label, onClick, isdisabled }) {
  return (
    <button
      value={label}
      type="button"
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
      disabled={isdisabled}
    ></button>
  );
}

const Grid = () => {
  const [order, setOrder] = useState([]);
  const [isdeactivated, setIsDeactivated] = useState(false);
  const cellCount = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivate = () => {
    setIsDeactivated(true);
    const timer = setInterval(() => {
      setOrder((orgOrder) => {
        const newOrder = orgOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivated(false);
        }
        return newOrder;
      });
    }, 400);
  };

  const activateCell = (ind) => {
    const newOrder = [...order, ind];
    setOrder(newOrder);
    console.log(order);

    if (cellCount.flat(1).filter(Boolean).length === newOrder.length) {
      deactivate();
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${cellCount[0].length} , 1fr)`,
          }}
        >
          {cellCount.flat(1).map((val, ind) => {
            return val ? (
              <Cell
                key={ind}
                label={ind}
                filled={order.includes(ind)}
                onClick={() => activateCell(ind)}
                isdisabled={order.includes(ind) || isdeactivated}
              />
            ) : (
              <span />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grid;
