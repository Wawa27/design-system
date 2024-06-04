import type {Meta, StoryObj} from '@storybook/vue3'

import Button from './Button.vue'

const meta = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],

} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonStory: Story = {
    args: {},
}
