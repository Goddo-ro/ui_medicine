import { Skeleton } from '@mui/material';

import classes from './PointerSkeleton.module.scss';

export const PointerSkeleton = () => {
  return (
    <div>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={classes.skeleton}>
            <Skeleton />
            {Array(5)
              .fill(0)
              .map((_, nestedIndex) => (
                <Skeleton key={`${index}-${nestedIndex}`} width={200} />
              ))}
          </div>
        ))}
    </div>
  );
};
