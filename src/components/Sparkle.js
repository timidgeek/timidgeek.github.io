import React from 'react'

const Sparkle = ({ color = 'currentColor', style, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 232 232"
    style={{ color, ...style }}
    className={className}
  >
    <g>
      <path style={{opacity:0.991}} fill="currentColor" d="M 114.5,3.5 C 123.479,69.4779 161.145,106.811 227.5,115.5C 179.723,119.813 145.557,143.48 125,186.5C 119.787,199.686 116.62,213.353 115.5,227.5C 111.187,179.723 87.5202,145.557 44.5,125C 31.3138,119.787 17.6471,116.62 3.5,115.5C 53.6836,111.015 88.5169,85.6819 108,39.5C 112.403,27.8925 114.569,15.8925 114.5,3.5 Z"/>
    </g>
  </svg>
)

export default Sparkle
