import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

/*
export const Red = () => (
  <Button label="Press me" backgroundColor="red" size="md" />
);*/

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = { label: "Press me", backgroundColor: "red", size: "md" };

export const Green = Template.bind({});
Green.args = { label: "Press me", backgroundColor: "green", size: "md" };

export const Small = Template.bind({});
Small.args = { label: "Press me", backgroundColor: "red", size: "sm" };

export const Large = Template.bind({});
Large.args = { label: "Press me", backgroundColor: "red", size: "lg" };

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: "Press me add adfa adfe vves adfadd",
  backgroundColor: "red",
  size: "md",
};
