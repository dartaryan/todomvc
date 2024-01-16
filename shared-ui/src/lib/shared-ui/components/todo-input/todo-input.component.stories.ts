import type { Meta, StoryObj } from '@storybook/angular';
import { TodoInputComponent } from './todo-input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TodoInputComponent> = {
  component: TodoInputComponent,
  title: 'TodoInputComponent',
};
export default meta;
type Story = StoryObj<TodoInputComponent>;

export const Primary: Story = {
  args: {
    label: '',
    placeholder: '',
    type: 'text',
  },
};

export const Heading: Story = {
  args: {
    label: '',
    placeholder: '',
    type: 'text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/todo-input works!/gi)).toBeTruthy();
  },
};
