import React from 'react';

const UrlBar = ({ currentPath }) => {
  return (
    <div className="url-bar">
      Current Path: {currentPath}
    </div>
  );
}

export default UrlBar;