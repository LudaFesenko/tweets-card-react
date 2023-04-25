import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #471ca9;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    color: #ebd8ff;
    text-shadow: 3px 2px 3px #000;
  }
`;
