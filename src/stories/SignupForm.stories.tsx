import type {Meta, StoryObj} from '@storybook/react';
import { SignupForm } from '../app/components/SignupForm';

const meta = {
    title: 'Components/SignupForm',
    component: SignupForm,
    parameters: {
        layout: 'centered',
    },

} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
    },
}

export const WithPreFilledData: Story = {
    args: {
    },
    play: async ({ canvasElement }) => {
        const emailInput = canvasElement.querySelector('input[type="email"]') as HTMLInputElement;
        const passwordInput = canvasElement.querySelector('input[type="password"]') as HTMLInputElement;

        if (emailInput && passwordInput) {
            emailInput.value = 'test@example.com';
            passwordInput.value = 'password123';
        }
    },
}

export const WithValidationErrors: Story = {
    args: {
    },
    play: async ({ canvasElement }) => {
        const form = canvasElement.querySelector('form') as HTMLFormElement;
        if (form) {
            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        }
    },
}