"use client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SessionProvider } from "next-auth/react"; // সেশন প্রোভাইডার ইমপোর্ট

export default function ReduxProvider({ children }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  );
}