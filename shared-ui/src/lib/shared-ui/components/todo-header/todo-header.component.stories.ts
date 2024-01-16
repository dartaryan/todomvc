import type { Meta, StoryObj } from '@storybook/angular';
import { TodoHeaderComponent } from './todo-header.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TodoHeaderComponent> = {
  component: TodoHeaderComponent,
  title: 'TodoHeaderComponent',
};
export default meta;
type Story = StoryObj<TodoHeaderComponent>;

export const Primary: Story = {
  args: {
    headerTitle: '',
    navigationLinks: [],
  },
};

export const Heading: Story = {
  args: {
    headerTitle: '',
    navigationLinks: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/todo-header works!/gi)).toBeTruthy();
  },
};
