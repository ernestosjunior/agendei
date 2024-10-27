import React, { useState, MouseEvent } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../utils/cookies";
import { COOKIES } from "../../constants/cookies";

export interface IProfileDropdown {
  name: string;
}

const dropdownOptions = [
  {
    label: "Perfil",
    key: "profile",
  },
  {
    label: "Sair",
    key: "logout",
  },
];

export function ProfileDropdown({ name }: IProfileDropdown) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const navigate = useNavigate();

  function handleClickOption(key: string) {
    switch (key) {
      case "logout":
        removeCookie(COOKIES.login);
        navigate("/login");
        break;

      default:
        handleClose();
        break;
    }
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        style={{
          textTransform: "none",
          color: "white",
          fontFamily: "Poppins",
        }}
      >
        {name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {React.Children.toArray(
          dropdownOptions.map((option) => (
            <MenuItem onClick={() => handleClickOption(option.key)}>
              {option.label}
            </MenuItem>
          ))
        )}
      </Menu>
    </div>
  );
}
