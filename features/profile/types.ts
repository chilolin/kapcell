export type ProfileStat = {
  label: string;
  value: string;
  note?: string;
};

export type ProfileActivity = {
  id: string;
  title: string;
  body: string;
  time: string;
  tag: string;
};

export type ProfileShowcase = {
  label: string;
  value: string;
};

export type UserProfile = {
  name: string;
  handle: string;
  role: string;
  bio: string;
  location: string;
  joinedAt: string;
  website: string;
};
