import React, { useState } from 'react';

const Career = () => {
  const [selectedTab, setSelectedTab] = useState('career-links');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="career-container">
      <div className="tab-container">
        <div
          className={`tab ${selectedTab === 'career-links' ? 'active' : ''}`}
          onClick={() => handleTabClick('career-links')}
        >
          Choosing a Career
        </div>
        <div
          className={`tab ${selectedTab === 'interviewing' ? 'active' : ''}`}
          onClick={() => handleTabClick('interviewing')}
        >
          Interviewing
        </div>
        <div
          className={`tab ${selectedTab === 'resume-building' ? 'active' : ''}`}
          onClick={() => handleTabClick('resume-building')}
        >
          Resume Building
        </div>
      </div>

      <div className="content-container">

        {selectedTab === 'career-links' && (
           <div className = "careerhelp">
            <h2>Add career choosing videos and those tests that tells which 
                career is good for them </h2>
            {}
          </div>
        )}

        {selectedTab === 'interviewing' && (
            <div className = "interview">
            <h2>Add interview skills videos, links to workshops,
                 and links to personal experiences </h2>
            {}
          </div>
        )}

        {selectedTab === 'resume-building' && (
           <div className = "resume">
            <h2> Add videos, links to examples of resume structure, 
                links to cover letter writers </h2>
            {}
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
