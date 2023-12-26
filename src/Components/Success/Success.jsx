import React from 'react';
import { CheckCircleFill } from 'react-bootstrap-icons';

const Success = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center d-flex flex-column align-items-center">
        <CheckCircleFill style={{ fontSize: '5em', color: 'rgb(255 95 99)' }} />
        <h1 className="mt-3" style={{fontSize: '2em'}}>Hotel Registered Successfully</h1>
      </div>
    </div>
  );
};

export default Success;
