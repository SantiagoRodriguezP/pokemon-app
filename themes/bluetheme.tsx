import { createTheme } from "@nextui-org/react"

export const blueTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}, // override dark theme colors
  }
});