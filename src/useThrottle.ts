/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export const useThrottle = (fn: Function, wait: number = 1000, option = { leading: true, trailing: true }) => {
  const timerId = useRef<NodeJS.Timeout | null>(null); // track the timer
  const lastArgs = useRef<any | null>(); // track the args

  // create a memoized debounce
  const throttle = useCallback(
    function (this: unknown, ...args: Parameters<any>) {
      const { trailing, leading } = option;
      // function for delayed call
      const waitFunc = () => {
        // if trailing invoke the function and start the timer again
        if (trailing && lastArgs.current) {
          fn.apply(this, lastArgs.current);
          lastArgs.current = null;
          timerId.current = setTimeout(waitFunc, wait);
        } else {
          // else reset the timer
          timerId.current = null;
        }
      };

      // if leading run it right away
      if (!timerId.current && leading) {
        fn.apply(this, args);
      }
      // else store the args
      else {
        lastArgs.current = args;
      }

      // run the delayed call
      if (!timerId.current) {
        timerId.current = setTimeout(waitFunc, wait);
      }
    },
    [fn, wait, option]
  );

  return throttle;
};