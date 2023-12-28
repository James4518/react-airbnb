import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.textColor.primary};
  font-weight: 600;
  .btns {
    display: flex;
    box-sizing: content-box;
    color: ${props => props.theme.isAlpha ? props.theme.color.third : props.theme.textColor.primary};
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: content-box;
      &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)": "#f5f5f5"};
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 78px;
    height: 43px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: ${props => props.theme.color.third};
    color: ${props => props.theme.textColor.primary};
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};
    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: ${props => props.theme.color.third};
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      color: #666;
      .top , 
      .bottom {
        padding: 10px 0;
        .item {
          display: block;
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
