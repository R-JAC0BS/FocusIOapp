import React, { type HtmlHTMLAttributes } from 'react';

const ViewModal = ({children} : HtmlHTMLAttributes<React.ReactNode>) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ViewModal;