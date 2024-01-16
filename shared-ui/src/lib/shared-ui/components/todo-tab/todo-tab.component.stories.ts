import type { Meta, StoryObj } from '@storybook/angular';
import { TodoTabComponent } from './todo-tab.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TodoTabComponent> = {
  component: TodoTabComponent,
  title: 'TodoTabComponent',
};
export default meta;
type Story = StoryObj<TodoTabComponent>;

export const Primary: Story = {
  args: {
    tabs: [],
  },
};

export const Heading: Story = {
  args: {
    tabs: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/todo-tab works!/gi)).toBeTruthy();
  },
};
