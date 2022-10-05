import * as React from 'react'

function SvgArrowLeftWithLine(props) {
  return (
    <svg width={32} height={32} viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6z"
      />
    </svg>
  )
}

export default SvgArrowLeftWithLine
