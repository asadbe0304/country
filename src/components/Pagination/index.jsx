import React, { useState } from "react";
import SweetPagination from "sweetpagination";

 export  function Items() {
    const [currentPageData, setCurrentPageData] = useState(new Array(1).fill());
    // Example items, to simulate fetching from another resources.
    const items = [1, 2,3,4,5,6,7,8,9,0,6,4,3,3,]
  return (
    <div>
      {currentPageData.map((item) => (
        <div>
          <h3>Item {item}</h3>
        </div>
      ))}

      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={2}
        getData={items}
        navigation={true}
      />
    </div>
  );
}

