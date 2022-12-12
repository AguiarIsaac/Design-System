import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 0,
  userSelect:'none',
  
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray100',
  fontWeight: 'regular',

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  span: {
    padding: '$4',
    borderRadius: '$sm',
    backgroundColor: '$gray900'
  },
})

export const Arrow = styled('div', {
  width: 0,
  height: 0,
  borderLeft: '$3 solid transparent',
  borderRight: '$3 solid transparent',
  borderTop: '$3 solid $gray900'
})