import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Input: {
      styles: () => ({
        input: {
          border: "none", // Remove border
          outline: "none", // Remove outline
          "&:focus": {
            border: "none", // Keep border transparent on focus
            outline: "none",
          },
        },
      }),
    },
  },
});
