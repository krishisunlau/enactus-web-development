import React, { useState } from 'react';

const Resources = () => {
  const [selectedTab, setSelectedTab] = useState('shelter');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="page-container">
      <div className="tab-container-two">
        <div
          className={`tab ${selectedTab === 'shelter' ? 'active' : ''}`}
          onClick={() => handleTabClick('shelter')}
        >
          Shelter Locations
        </div>
        <div
          className={`tab ${selectedTab === 'food' ? 'active' : ''}`}
          onClick={() => handleTabClick('food')}
        >
          Food Sources
        </div>
        <div
          className={`tab ${selectedTab === 'clothing' ? 'active' : ''}`}
          onClick={() => handleTabClick('clothing')}
        >
          Clothing Retailers
        </div>
      </div>

      <div className="resource-container">

        {selectedTab === 'shelter' && (
           <div className = "shelterhelp">
            <h2>llalalalalal </h2>
            {}
          </div>
        )}

        {selectedTab === 'food' && (
            <div className = "foodhelp">
            <h2>wrgjewrgg </h2>
            {}
          </div>
        )}

        {selectedTab === 'clothing' && (
           <div className = "clothinghelp">
            <h2> oppspsps </h2>
            {}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
