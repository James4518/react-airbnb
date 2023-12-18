import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data";
import classNames from "classnames";

const EntireFilter = memo(() => {
  const [selected, setSelected] = useState([]);
  const filterClickHandle = (item) => {
    const newItems = [...selected];
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex((filterItem) => filterItem == item);
      newItems.splice(itemIndex, 1);
    } else {
      newItems.push(item);
    }
    setSelected(newItems);
  };
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selected.includes(item),
              })}
              onClick={() => filterClickHandle(item)}
              key={item}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;

