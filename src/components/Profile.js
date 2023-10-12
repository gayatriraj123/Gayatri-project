import React, { useState } from "react";

function Profile({ data, onClickSummary }) {
  const [show, setShow] = useState(false);

  const toggleSummary = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="col-md-5">
      <div className="card mb-4">
        <img
          src={data.photo}
          alt={data.name}
          className="card-img-top img-fluid"
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description}</p>
          <button className="btn btn-primary" onClick={toggleSummary}>
            Summary
          </button>

          
          {show && <p className="card-text">{data.summary} </p>}
        </div>
      </div>
    </div>
  );
}

export default Profile;
