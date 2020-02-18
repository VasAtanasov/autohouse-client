import { useLayoutEffect, useState } from 'react';

const getWindowDimension = () => {
    const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    return [width, height];
};

export const useWindowSize = () => {
    function debounce(fn, ms) {
        let timer;
        return _ => {
            clearTimeout(timer);
            timer = setTimeout(_ => {
                timer = null;
                fn.apply(this, arguments);
            }, ms);
        };
    }

    const [size, setSize] = useState(getWindowDimension());

    useLayoutEffect(() => {
        const debounceHandleResize = debounce(() => {
            setSize([window.innerWidth, window.innerHeight]);
        }, 200);

        window.addEventListener('resize', debounceHandleResize);
        return () => window.removeEventListener('resize', debounceHandleResize);
    }, []);

    return size;
};
