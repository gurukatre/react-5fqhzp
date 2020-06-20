import React from 'react';

const  header = (props) => {
  return (
    <div className="appHeader">
      <input type="text" onKeyUp={(e) => props.handleChange(e)} />
    </div>
  );
}

export default header;