type DebouncedFunction = (...args: any[]) => any;

export const debounce = <T extends DebouncedFunction>(func: T, wait: number, immediate = false) => {
  let timeout: number | null = null;

  const debouncedFunction = (...args: any[]) => {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };

  return debouncedFunction as T;
};