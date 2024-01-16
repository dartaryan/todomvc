import type { Meta, StoryObj } from '@storybook/angular';
import { TodoCardComponent } from './todo-card.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TodoCardComponent> = {
  component: TodoCardComponent,
  title: 'TodoCardComponent',
};
export default meta;
type Story = StoryObj<TodoCardComponent>;

export const Primary: Story = {
  args: {
    planDetails: null,
    offerDetails: null,
  },
};

export const Heading: Story = {
  args: {
    planDetails: null,
    offerDetails: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/todo-card works!/gi)).toBeTruthy();
  },
};
