import React, { type HtmlHTMLAttributes } from 'react';
import styles from "./box.module.css"
import View from '../View';

const BoxSettings = ({children,className} : HtmlHTMLAttributes<React.ReactNode>) => {
  return (
    <View className={`${styles.container} ${className} `}>
        {children}
    </View>
  );
};

export default BoxSettings;