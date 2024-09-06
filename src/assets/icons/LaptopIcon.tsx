import React from "react";
import { SVGProps } from "react";

const LaptopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="18"
        height="18"
        fill="url(#pattern0)"
        fillOpacity="0.5"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <image
            href="data:image/png;base64,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"
            transform="scale(0.01)"
          />
        </pattern>
      </defs>
    </svg>
  );
};

export default LaptopIcon;
