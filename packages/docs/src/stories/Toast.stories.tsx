import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@05-design-system/react'


export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    date: '9 de Dezembro, ás 16h',
    status: 'Realizado'
  }
} as Meta<ToastProps>


export const Primary: StoryObj<ToastProps> = {}