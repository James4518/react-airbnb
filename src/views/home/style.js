import styled from "styled-components";
import coverImage from "@/assets/img/cover_01.jpeg";

export const HomeWrapper = styled.div`
  > .content {
    width: 1032px;
    margin: 0 auto;
  }
  .content > *{
    margin-top: 30px;
  }
`;

export const BannerWrapper = styled.div`
  height: 530px;
  background: url(${new URL(coverImage, import.meta.url)}) center/cover;
`;
