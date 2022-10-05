import * as React from 'react'

function SvgArrowRightWithLine(props) {
  return (
    <svg width={32} height={32} viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M13.3 17.275q-.3-.3-.288-.725.013-.425.313-.725L16.15 13H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.15L13.3 8.15q-.3-.3-.3-.713 0-.412.3-.712t.713-.3q.412 0 .712.3L19.3 11.3q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.687.275-.413 0-.713-.3z"
      />
    </svg>
  )
}

export default SvgArrowRightWithLine
