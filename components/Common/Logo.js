// https://react-svgr.com/playground/
import * as React from 'react'

// https://www.svgrepo.com/svg/458225/home
// https://www.svgrepo.com/svg/457962/home
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      d="M5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 1c9.925 0 18 8.075 18 18m-5 0c0-7.168-5.832-13-13-13m8 13c0-4.411-3.589-8-8-8m-3 0v8"
    />
  </svg>
)

export default Logo
