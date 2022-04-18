import "../styles/globals.css";
import type { AppProps } from "next/app";
import WrapperLayout from "components/layout/WrapperLayout";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "lib/store";
import { ThemeProvider } from "next-themes";

const RoboCooker = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" themes={["light", "dark"]}>
        <WrapperLayout>
          <Component {...pageProps} />
          <Toaster />
        </WrapperLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default RoboCooker;
