import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WeatherIcon from "./WeatherIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/WeatherIcon",
  component: WeatherIcon,
} as ComponentMeta<typeof WeatherIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WeatherIcon> = (args) => (
  <WeatherIcon {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
