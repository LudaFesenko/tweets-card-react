import { IoArrowBackCircleSharp } from "react-icons/io5";
import { StyledLink } from "./BackLink.styled";

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <IoArrowBackCircleSharp size="40" />

      {children}
    </StyledLink>
  );
};
