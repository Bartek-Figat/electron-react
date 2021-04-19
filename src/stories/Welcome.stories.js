import React from 'react';

import { WelcomeContainer } from '../componets/WelcomeContainer/WelcomeContainer';

export default {
  title: 'WelcomeContainer',
  component: WelcomeContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <WelcomeContainer {...args}></WelcomeContainer>;

export const Welcome_Container = Template.bind({});
Welcome_Container.args = {
  primary: true,
  label: 'Welcome_Container',
};
