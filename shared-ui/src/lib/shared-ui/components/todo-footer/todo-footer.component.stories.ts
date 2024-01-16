import type { Meta, StoryObj } from '@storybook/angular';
import { TodoFooterComponent } from './todo-footer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TodoFooterComponent> = {
  component: TodoFooterComponent,
  title: 'TodoFooterComponent',
};
export default meta;
type Story = StoryObj<TodoFooterComponent>;

export const Primary: Story = {
  args: {
    footerLinks: [],
    companyInfo: '',
  },
};

export const Heading: Story = {
  args: {
    footerLinks: [],
    companyInfo: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/todo-footer works!/gi)).toBeTruthy();
  },
};
