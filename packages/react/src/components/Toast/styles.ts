import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  maxWidth: '$80',
  maxHeight: '$20',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'flex-start',
  padding: '$4',
  background: '$gray800',
  borderRadius: 8,
  border: '1px solid $gray600',
  color: 'White', 

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