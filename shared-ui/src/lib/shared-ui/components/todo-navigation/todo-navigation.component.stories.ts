import type { Meta, StoryObj } from '@storybook/angular';
import { TodoNavigationComponent } from './todo-navigation.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TodoNavigationComponent> = {
  component: TodoNavigationComponent,
  title: 'TodoNavigationComponent',
};
export default meta;
type Story = StoryObj<TodoNavigationComponent>;

export const Primary: Story = {
  args: {
    navLinks: [],
    activeLink: '',
  },
};

export const Heading: Story = {
  args: {
    navLinks: [],
    activeLink: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/todo-navigation works!/gi)).toBeTruthy();
  },
};
