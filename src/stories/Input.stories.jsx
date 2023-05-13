import Input from "./Input";

export default {
  title: "components/Input",
  component: Input,
  tags: ['autodocs'],
  args: {
    label: "Label",
    size: "md",
    disabled: false,
    helperText: "",
    error: false,
    fullWidth: false,
    multiline: false,
    row: 4,
    startIcon: "",
    endIcon: "",
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
}

export const Small = Template.bind({});
Small.args = {
  size: "sm",
}

export const Error = Template.bind({});
Error.args = {
  error: true,
}

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
}

export const Helpertext = Template.bind({});
Helpertext.args = {
  helperText: "This is a helper text",
}

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  fullWidth: true,
}

export const Starticon = Template.bind({});
Starticon.args = {
  startIcon: "add",
}

export const Endicon = Template.bind({});
Endicon.args = {
  endIcon: "add",
}

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  row: 10,
  error: false,
}