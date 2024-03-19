"use client";

import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/lib/integration/react";

let persistor = persistStore(store);

export const StorageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        {children}
      </PersistGate>
    </Provider>
  );
};
