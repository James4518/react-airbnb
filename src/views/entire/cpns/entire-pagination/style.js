import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    .MuiPaginationItem-icon {
      font-size: 24px;
    }
    .MuiPaginationItem-page {
      margin: 0 9px;
      &:hover {
        text-decoration: underline;
      }
    }
    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: ${props => props.theme.color.third};
    }
    .desc {
      margin-top: 16px;
      color: #222;
    }
  }
`