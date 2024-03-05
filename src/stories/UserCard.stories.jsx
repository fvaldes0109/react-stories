import UserCard from "./UserCard";

export default {
  title: "UserCard",
  component: UserCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    avatarUrl: { control: "text" },
  },
};

export const Online = {
  args: {
    username: "John Doe",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBNdcMDNS2r9df1IWFVc8AY0QNtfNhEJv7fGS5TdhUWrlBqfGu1PCCn9lKpL-FqF9dWc&usqp=CAU",
    bio: "Hello, I'm John Doe!",
    isOnline: true,
  },
};

export const Offline = {
  args: {
    username: "John Doe",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBNdcMDNS2r9df1IWFVc8AY0QNtfNhEJv7fGS5TdhUWrlBqfGu1PCCn9lKpL-FqF9dWc&usqp=CAU",
    bio: "Hello, I'm John Doe!",
    isOnline: false,
  },
};

