import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: ${props => props.theme.textSize.primary};
    font-weight: 700;
    color: ${props => props.color};
    &:hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 6px;
    }
  }
`