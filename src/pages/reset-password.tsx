import React from "react";
import router from "next/router";
import { ResetPasswordPage } from "templates";

const ResetPassword = () => {
  const { token }: { token?: string } = router.query;

  return <ResetPasswordPage token={token} />;
};

export default ResetPassword;
