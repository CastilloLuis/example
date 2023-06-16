import styled, { keyframes } from 'styled-components';

export const shimmer = keyframes`
  0% {
    background-position: -100%;
  }
  100% {
    background-position: 100%;
  }
`;

export const SkeletonContainer = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
`;

export const SkeletonContent = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f5f5f5 25%, #e8e8e8 37%, #f5f5f5 63%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
`;