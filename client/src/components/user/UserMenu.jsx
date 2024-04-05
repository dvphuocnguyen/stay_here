import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { useValue } from "../../context/ContextProvider";
import PropTypes from "prop-types"; // Import thư viện PropTypes

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  const { dispatch } = useValue();
  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };

  return (
    <>
      <Menu
        anchorEl={anchorUserMenu}
        open={Boolean(anchorUserMenu)}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
      >
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
            Profile
          </ListItemIcon>
        </MenuItem>
        <MenuItem
          onClick={() => dispatch({ type: "UPDATE_USER", payload: null })}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
            Logout
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
};
UserMenu.propTypes = {
  anchorUserMenu: PropTypes.object, // Kiểm tra anchorUserMenu có kiểu object
  setAnchorUserMenu: PropTypes.func.isRequired, // Kiểm tra setAnchorUserMenu có kiểu function và là bắt buộc
};
export default UserMenu;
