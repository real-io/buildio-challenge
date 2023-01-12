import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ForecastDay from "./ForecastDay";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ForecastDay",
  component: ForecastDay,
} as ComponentMeta<typeof ForecastDay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForecastDay> = (args) => (
  <ForecastDay {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
