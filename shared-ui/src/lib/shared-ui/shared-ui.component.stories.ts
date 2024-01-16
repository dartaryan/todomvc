import type { Meta, StoryObj } from '@storybook/angular';
import { SharedUiComponent } from './shared-ui.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SharedUiComponent> = {
  component: SharedUiComponent,
  title: 'SharedUiComponent',
};
export default meta;
type Story = StoryObj<SharedUiComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/shared-ui works!/gi)).toBeTruthy();
  },
};
