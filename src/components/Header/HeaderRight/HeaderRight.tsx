"use client";

import { Register } from "@/components/Register/Register";
import { UserAccountAuthorized } from "../UserAccountAuth/UserAccountAuth";
import { Login } from "@/components/Login/Login";
import { UserAccountNonAuthorized } from "../UserAccountNonAuth/UserAccountNonAuth";
import { useAppSelector } from "@/store/hooks";

export const HeaderRight = () => {
  const { user } = useAppSelector(state => state.user)

  return (
    <>
      {user?.jwt ? (
        <UserAccountAuthorized />
      ) : (
        <>
          <Login />
          <Register />
          <UserAccountNonAuthorized />
        </>
      )}
    </>
  );
};
