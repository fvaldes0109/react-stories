import ChatBubble from './ChatBubble';

export default {
  title: 'ChatBubble',
  component: ChatBubble,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const FromYourself = {
  args: {
    message: 'Hello!',
    fromYourself: true,
    backgroundColor: 'lightblue',
  },
};

export const FromOthers = {
  args: {
    message: 'Hi there!',
    fromYourself: false,
    backgroundColor: 'lightgreen',
  },
};

export const Typing = {
  args: {
    message: 'Typing...',
    fromYourself: false,
    backgroundColor: 'lightgreen',
    typing: true,
  },
};
