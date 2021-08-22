import React from 'react';
import companyList from './companyList.json';

const Companies = () => {
  return (
    <div className="companies">
      {companyList.map(co => <div>{co.name}</div>)}
    </div>
  );
}

export default Companies;