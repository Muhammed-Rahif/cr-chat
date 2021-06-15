import { useState, createContext, useMemo } from "react";
import { createMuiTheme } from "@material-ui/core/styles";

// Contexts
export const SideDrawerContext = createContext(null);
export const ThemeContext = createContext(null);
export const NotificationsPopoverContext = createContext(null);
export const BackdropLoadingContext = createContext(null);

export default function Contexts({ children }) {
  const [sideDrawer, setSideDrawer] = useState(false);
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [notificationsPopover, setNotificationsPopover] = useState(false);
  const [backdropLoading, setBackdropLoading] = useState(true);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkTheme ? "dark" : "light",
        },
      }),
    [darkTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, darkTheme, setDarkTheme }}>
      <BackdropLoadingContext.Provider
        value={{ backdropLoading, setBackdropLoading }}
      >
        <NotificationsPopoverContext.Provider
          value={{ notificationsPopover, setNotificationsPopover }}
        >
          <SideDrawerContext.Provider value={{ sideDrawer, setSideDrawer }}>
            {children}
          </SideDrawerContext.Provider>
        </NotificationsPopoverContext.Provider>
      </BackdropLoadingContext.Provider>
    </ThemeContext.Provider>
  );
}
