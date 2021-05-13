import styled, { css } from "styled-components/macro";

export const AvatarContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    overflow: hidden;
    position: relative;
    font-size: 1.25rem;
    align-items: center;
    flex-shrink: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1;
    user-select: none;
    border-radius: 50%;
    justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  color: transparent;
  text-align: center;
  // Handle non-square image. The property isn't supported by IE 11.
  object-fit: cover;
  // Hide alt text.
  color: transparent;
  // Hide the image broken icon, only works on Chrome.
  text-indent: 10000px;
`;
