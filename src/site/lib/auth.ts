import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";

export const useLoggedIn = () => {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: IRootState) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (auth.token) {
      dispatch(getUser());
    } else {
      router.push("/login");
    }
  }, []);
};
