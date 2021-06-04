import { useRouter } from "next/router";
import React from "react";
import { VerifyPage } from "templates";

const Verify = () => {
  const router = useRouter();
  const { token }: { token?: string } = router.query;

  return <VerifyPage token={token} />;
};

export default Verify;
