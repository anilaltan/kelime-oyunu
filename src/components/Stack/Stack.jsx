// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

function Stack({ children, spacing = 2, direction = 'row', wrap = false }) {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: direction
  }
  return <div style={style}>{children}</div>
}

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column'])
}

Stack.defaultProps = {
  spacing: undefined,
  wrap: false,
  direction: 'row'
}

export default Stack
