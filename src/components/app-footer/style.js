import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 50px;
  border-top: 1px solid #ebebeb;
  .wrapper {
    width: 1080px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 30px 20px;
  }
  .service {
    display: flex;
    text-align: center;
    .item {
      flex: 1;
      .name {
        margin-bottom: 16px;
        font-weight: 700;
      }
      .list {
        display: block;
        margin: 10px 80px 0 80px;
        color: #767676;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .information {
    margin-top: 24px;
    border-top: 1px solid #ebebeb;
    padding: 18px;
    color: #767676;
    text-align: center;
  }
`;

