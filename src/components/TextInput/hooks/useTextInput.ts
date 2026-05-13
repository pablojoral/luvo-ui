import { useState } from 'react';

export const useTextInput = (secureTextEntry?: boolean) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => setIsVisible(v => !v);

  return {
    isVisible,
    handleToggleVisibility,
    // When secureTextEntry is true, visibility toggle inverts it.
    // When secureTextEntry is false/undefined, propagate as-is.
    resolvedSecureTextEntry: secureTextEntry ? !isVisible : secureTextEntry,
  };
};
