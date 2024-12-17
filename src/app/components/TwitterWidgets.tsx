"use client"

import React, { useEffect } from "react";

const TwitterWidgets = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <a
        className="twitter-timeline"
        href="https://twitter.com/arcaimperf?ref_src=twsrc%5Etfw"
        target="_blank" rel="noopener noreferrer"
        data-width="400"
        data-height="550"
        >
        Tweets by Arca imperf
        </a>
    );
};

export default TwitterWidgets;