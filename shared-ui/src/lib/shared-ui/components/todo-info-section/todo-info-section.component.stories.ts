import type { Meta, StoryObj } from '@storybook/angular';
import { TodoInfoSectionComponent } from './todo-info-section.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TodoInfoSectionComponent> = {
  component: TodoInfoSectionComponent,
  title: 'TodoInfoSectionComponent',
};
export default meta;
type Story = StoryObj<TodoInfoSectionComponent>;

export const Primary: Story = {
  args: {
    sectionTitle: '',
    infoContent: '',
  },
};

export const Heading: Story = {
  args: {
    sectionTitle: '',
    infoContent: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/todo-info-section works!/gi)).toBeTruthy();
  },
};
