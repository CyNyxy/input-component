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

export const Error = Template.bind({});
Error.args = {
  error: true,
}

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  row: 10,
  error: false,
}