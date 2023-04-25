import PropTypes from "prop-types";

import { StyledButton } from "./ButtonLoad.styled";

function ButtonLoad({ onClick }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      Load more
    </StyledButton>
  );
}

ButtonLoad.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLoad;
