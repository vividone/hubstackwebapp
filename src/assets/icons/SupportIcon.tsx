import * as React from "react";
import { SVGProps } from "react";

const SupportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="36" height="36" fill="url(#pattern0_957_940)"/>
    <defs>
      <pattern id="pattern0_957_940" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_957_940" transform="scale(0.01)"/>
      </pattern>
      <image id="image0_957_940" width="100" height="100" xlinkHref="data:image/png;base64,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"/>
    </defs>
  </svg>
);

export default SupportIcon;