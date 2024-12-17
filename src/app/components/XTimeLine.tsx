"use client"

import React, { useEffect } from 'react';

const XTimeline = () => {
  useEffect(() => {
    // X ウィジェットを再ロード（初回マウント時）
    if (typeof window !== 'undefined' && (window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load();
    }
  }, []);

  return (
    <div>
      {/* タイムライン埋め込み */}
      <a
        className="twitter-timeline"
        href="https://twitter.com/arcaimperf?ref_src=twsrc%5Etfw"
        data-width="400"
        data-height="500"
      >
        Tweets by arcaimperf
      </a>

      {/* 外部スクリプト */}
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  );
};

export default XTimeline;
