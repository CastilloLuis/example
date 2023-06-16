import React from 'react';
import * as SC from './Skeleton.styles'

interface SkeletonProps {
  width: number;
  height: number;
}

const Skeleton = ({ width, height }: SkeletonProps) => {
  const skeletonStyles = {
    width: width || '100%',
    height: height || '100%',
  };

  return (
    <SC.SkeletonContainer style={skeletonStyles}>
      <SC.SkeletonContent />
    </SC.SkeletonContainer>
  );
};

export default Skeleton;
