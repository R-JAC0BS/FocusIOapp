import React, {type HtmlHTMLAttributes } from 'react';

const Logo = ({children} : HtmlHTMLAttributes<React.ReactNode>) => {
  return (
    <div>
       {children}
    </div>
  );
};

export default Logo;