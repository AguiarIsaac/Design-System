import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 0,

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  span: {
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: 'aquamarine'
  },
})

export const Arrow = styled('div', {
  width: 0,
  height: 0,
  borderLeft: '12px solid transparent',
  borderRight: '12px solid transparent',
  borderTop: '12px solid aquamarine'
})