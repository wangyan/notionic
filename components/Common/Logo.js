// https://react-svgr.com/playground/
import * as React from 'react'

// https://www.svgrepo.com/svg/458225/home
// https://www.svgrepo.com/svg/457962/home
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    stroke="#000"
    strokeWidth={1.44}
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#222">
      <path d="M5 12.76c0-1.358 0-2.037.274-2.634.275-.597.79-1.038 1.821-1.922l1-.857C9.96 5.75 10.89 4.95 12 4.95c1.11 0 2.041.799 3.905 2.396l1 .857c1.03.884 1.546 1.325 1.82 1.922.275.597.275 1.276.275 2.634V17c0 1.886 0 2.828-.586 3.414C17.828 21 16.886 21 15 21H9c-1.886 0-2.828 0-3.414-.586C5 19.828 5 18.886 5 17v-4.24Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 21v-5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5"
      />
    </g>
  </svg>
)

export default Logo
