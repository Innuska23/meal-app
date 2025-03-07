import React from "react";
import styled from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $isActive?: boolean;
  to?: string;
  $variant?: "primary" | "secondary" | "danger" | "default" | "success";
  activeColor?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 12px 18px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
  background: #e0e0e0;
  box-shadow: 4px 4px 8px #b8b8b8, -4px -4px 8px #ffffff;
  color: #333;
  font-weight: bold;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #ccc;
  }

  &:hover {
    background: #d9d9d9;
  }

  &:active {
    box-shadow: inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #ffffff;
    transform: translateY(2px);
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return `background: #007BFF; color: white;`;
      case "secondary":
        return `background: #6c757d; color: white;`;
      case "danger":
        return `background: rgb(220, 53, 69); color: white;`;
      case "success":
        return `background: rgb(25, 135, 84); color: white;`;
      default:
        return ``;
    }
  }}

  ${({ $isActive, activeColor }) =>
    $isActive &&
    `
    background: ${activeColor || "rgb(25, 135, 84)"};
    color: white;
  `}
`;
