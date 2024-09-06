import React from "react";
import { SVGProps } from "react";

const CustomerIcons = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props} // This passes down additional props
    >
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <image
            id="image0"
            width="100"
            height="100"
            xlinkHref="data:image/png;base64,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"
            transform="scale(0.01)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern0)" />
    </svg>
  );
};

export default CustomerIcons;
