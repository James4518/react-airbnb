import styled from "styled-components";

export const Section3Wrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 9px;
    font-size: ${(props) => props.theme.textSize.primary};
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};
    
    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: ${(props) => props.theme.color.third};
      background-color: ${(props) => props.theme.color.second};
    }
  }
`;

