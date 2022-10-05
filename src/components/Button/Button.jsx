// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

function Button({ label, backgroundColor, size, handleClick }) {
  let scale = 1
  if (size === 'sm') scale = 0.75
  if (size === 'lg') scale = 1.5
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none'
  }
  return (
    <button type="button" onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func
}

Button.defaultProps = {
  label: '',
  backgroundColor: 'red',
  size: 'md',
  handleClick: undefined
}

export default Button
