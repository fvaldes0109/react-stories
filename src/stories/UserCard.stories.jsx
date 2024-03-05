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
    avatarUrl: "https://cdn.kibrispdr.org/data/862/user-profile-png-4.png",
    bio: "Hello, I'm John Doe!",
    isOnline: true,
  },
};

export const Offline = {
  args: {
    username: "John Doe",
    avatarUrl: "https://cdn.kibrispdr.org/data/862/user-profile-png-4.png",
    bio: "Hello, I'm John Doe!",
    isOnline: false,
  },
};

export const NoPhoto = {
  args: {
    username: "John Doe",
    avatarUrl: "",
    bio: "Hello, I'm John Doe!",
    isOnline: false,
  },
};

