"use client";

import { storeProviderChildren } from "@/types/store.types";
import { Provider } from "react-redux";
import { Store } from "@/lib/store/store";

export const StoreProvider = ({ children }: storeProviderChildren) => {
  return <Provider store={Store}>{children}</Provider>;
};
