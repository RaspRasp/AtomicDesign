import { createContext, useState } from "react";

export const UserContexst = createContext({});

export const UserProveider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContexst.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContexst.Provider>
  );
};
