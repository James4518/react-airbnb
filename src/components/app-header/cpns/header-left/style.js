import styled from "styled-components";

export const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
  color: ${(props) => props.theme.isAlpha ? props.theme.color.third : props.theme.color.primary};
  .logo {
    cursor: pointer;
  }
`;
