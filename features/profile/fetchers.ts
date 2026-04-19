import { profileActivities, profileShowcase, profileStats, profileUser } from "./constants";
import type { ProfileActivity, ProfileShowcase, ProfileStat, UserProfile } from "./types";

export async function fetchProfileUser(): Promise<UserProfile> {
  return profileUser;
}

export async function fetchProfileStats(): Promise<ProfileStat[]> {
  return profileStats;
}

export async function fetchProfileShowcase(): Promise<ProfileShowcase[]> {
  return profileShowcase;
}

export async function fetchProfileActivities(): Promise<ProfileActivity[]> {
  return profileActivities;
}
