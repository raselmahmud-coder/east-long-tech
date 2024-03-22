import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import { useDispatch, useSelector } from "react-redux";
import { setColorMode } from "../redux/slices/colorModeSlice";

function ToggleColorMode() {
  const dispatch = useDispatch();
  const { colorMode } = useSelector((state) => state.colorMode);
  const toggleColorMode = () => {
    dispatch(
      setColorMode({ colorMode: colorMode === "dark" ? "light" : "dark" }),
    );
  };

  return (
    <Box sx={{ maxWidth: "32px" }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: "32px", height: "32px", p: "4px" }}>
        {colorMode === "dark" ? (
          <WbSunnyRoundedIcon fontSize="medium" />
        ) : (
          <ModeNightRoundedIcon fontSize="medium" />
        )}
      </Button>
    </Box>
  );
}

/* ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
}; */

export default ToggleColorMode;
