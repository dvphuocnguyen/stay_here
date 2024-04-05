import PropTypes from "prop-types"; // Import thư viện PropTypes
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
const PasswordField = ({ passwordRef, id = 'password', label = 'Password' }) => {
  
    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => {
      setShowPassword(!showPassword)
    }

    const handleMouseDown = (e) => (
      e.preventDefault()
    )

  return (
    <>
      <TextField
        autoFocus
        margin="normal"
        variant="standard"
        id={id}
        label={label}
        type= {showPassword? 'text' : 'password'} // Loại dữ liệu là password, không phải email
        fullWidth
        inputRef={passwordRef} // Đổi passwwordRef thành passwordRef
        inputProps={{ minLength: 6 }}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
                {showPassword ? <VisibilityOff/> : <Visibility/>}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </>
  );
};

// Định dạng và kiểm tra PropTypes cho props của component
PasswordField.propTypes = {
  passwordRef: PropTypes.object, // Kiểm tra passwordRef có kiểu object
  id: PropTypes.string, // Kiểm tra id có kiểu string
  label: PropTypes.string, // Kiểm tra label có kiểu string
};

export default PasswordField;
