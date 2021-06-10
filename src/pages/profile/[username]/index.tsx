import React from "react";
import router from "next/router";
import { ProfilePage } from "templates";

const Profile = () => {
  const { username }: { username?: string } = router.query;

  return username ? <ProfilePage username={username} /> : null;
};

export default Profile;
