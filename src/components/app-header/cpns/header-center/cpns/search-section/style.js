import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  width: 730px;
  height: 66px;
  border-radius: 32px;
  border: 1px solid #ddd;
  background-color: ${props => props.theme.color.third};
  .item {
    flex: 1;
    display: flex;
    align-items: center;
    border-radius: 32px;
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px;
      text-align: center;
      .title {
        font-size: 12px;
        font-weight: 800;
        color: ${props => props.theme.textColor.second}
      }
      .desc {
        color: #666;
      }
    }
    .divider {
      height: 32px;
      width: 1px;
      background-color: #ddd;
    }
    &:hover {
      background-color: #eee;
    }
  }
`