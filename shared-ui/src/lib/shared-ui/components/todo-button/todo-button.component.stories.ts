import type { Meta, StoryObj } from '@storybook/angular';
import { TodoButtonComponent } from './todo-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TodoButtonComponent> = {
  component: TodoButtonComponent,
  title: 'TodoButtonComponent',
};
export default meta;
type Story = StoryObj<TodoButtonComponent>;

export const Primary: Story = {
  args: {
    buttonText: 'Button',
    selectable: false,
    selected: false,
  },
};

export const Heading: Story = {
  args: {
    buttonText: 'Button',
    selectable: false,
    selected: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/todo-button works!/gi)).toBeTruthy();
  },
};
