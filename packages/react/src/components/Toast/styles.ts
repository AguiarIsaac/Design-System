import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '$80',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'flex-start',
  padding: '$4',
  background: '$gray800',
  borderRadius: 8,
  border: '2px solid $gray600',
  color: 'White',
  fontFamily: '$default',

  button: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',

    svg: {
      color: '$gray200'
    },

    '&:hover': {
      svg: {
        color:'$gray500'
      }
    }
  }
})

export const TextElement = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  span: {
    fontWeight: '$bold'
  },

  small: {
    color: '$gray200'
  }
})