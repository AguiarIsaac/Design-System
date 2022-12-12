import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@05-design-system/react'


export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    date: '9 de Dezembro',
    status: 'Realizado'
  },
  argTypes: {
    status: {
      options: ['Realizado', 'Cancelado']
    },
    control: {
      type: 'inline-radio'
    }
  }
} as Meta<ToastProps>


export const Primary: StoryObj<ToastProps> = {}