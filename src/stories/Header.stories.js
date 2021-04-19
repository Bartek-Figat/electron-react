import React from 'react';

import { Header } from '../componets/Header/Header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Header {...args}></Header>;

export const Main_Header = Template.bind({});
Main_Header.args = {
  primary: true,
  label: 'Header',
};
