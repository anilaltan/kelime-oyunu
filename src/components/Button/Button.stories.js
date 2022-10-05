import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } }
}

// eslint-disable-next-line react/function-component-definition
const Template = (args) => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md'
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md'
}
