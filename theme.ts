import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "10px",
      },
      contained: {
        backgroundColor: "white",
        boxShadow:
          "0 1px 1px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%);",
        "&:hover": {
          backgroundColor: "white",
          boxShadow:
            "0 1px 1px rgb(0 0 0 / 12%), 0 2px 5px rgb(0 0 0 / 10%), 0 -1px 0 rgb(0 0 0 / 10%), -1px 0 0 rgb(0 0 0 / 15%), 1px 0 0 rgb(0 0 0 / 15%);",
        },
      },
    },
  },
});
