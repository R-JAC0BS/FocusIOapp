import React, { type HtmlHTMLAttributes } from 'react';

const View = ({children,className} : HtmlHTMLAttributes<React.ReactNode>) => {
  return (
    <div className= {className}>
      {children}
    </div>
  );
};

export default View;