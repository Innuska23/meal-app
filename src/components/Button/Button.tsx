import React from "react";
import { Link } from "react-router-dom";

import { ButtonProps, StyledButton } from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  disabled,
  style,
  ...props
}) => {
  if (to && !disabled) {
    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        <StyledButton as="button" {...props} style={style}>
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton disabled={disabled} style={style} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
