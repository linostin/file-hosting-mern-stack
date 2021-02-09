import styled from "styled-components";

export const CardMessageContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  z-index: 1400;
  position: fixed;
  width: 350px;
  max-height: 545px;
  overflow: auto;
  box-sizing: border-box;
  max-height: 100%;
  flex-direction: column;
  right: 20px;
  bottom: 15px;
  overflow: hidden;
`;

export const CardMessageFileNameWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const CardMessageFileLoadingWrapper = styled.div`
display: flex;
flex-direction: column;
`;