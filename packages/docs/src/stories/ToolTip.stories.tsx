import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@05-design-system/react'


export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    date: '9 de Dezembro',
    disponibility: true
  }
} as Meta<TooltipProps>


export const Primary: StoryObj<TooltipProps> = {}