import styled from "styled-components";

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
  .content {
    position: relative;
    z-index: 19;
    transition: all 250ms ease;
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 1px solid #eee;
    border-bottom-color: rgba(233, 233, 233, 1);
    .top {
      display: flex;
      align-items: center;
      height: 60px;
    }
  }
  .cover {
    position: fixed;
    z-index: 11;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

