"use client";

import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";

let persistor = persistStore(store);

export const StorageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
};
