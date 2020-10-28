import React, { useEffect } from 'react';

// User has switched back to the tab
const onFocus = () => {
  document.title("Nam Truong")
};

// User has switched away from the tab (AKA tab is hidden)
const onBlur = () => {
    document.title("Come Back To Me !!")
};

const useWindowFocus = () => {
  useEffect(() => {
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  });

  return <></>;
};

export default useWindowFocus;