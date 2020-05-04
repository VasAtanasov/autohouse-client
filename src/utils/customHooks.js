import { useLayoutEffect, useState, useRef, useEffect } from 'react';

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
        return (_) => {
            clearTimeout(timer);
            timer = setTimeout((_) => {
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

export const useComponentVisible = (initialIsVisible) => {
    const [visible, setVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleHideDropdown = (event) => {
        if (event.key === 'Escape') {
            setVisible(false);
        }
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return [ref, visible, setVisible];
};
