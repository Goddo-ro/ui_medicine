import { Skeleton } from '@mui/material';

import classes from './PrefixesSkeleton.module.scss';

export const PrefixesSkeleton = () => {
  return (
    <div className={classes.skeleton}>
      <Skeleton />
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div className={classes.itemContainer} key={i}>
            <Skeleton className={classes.itemSkeleton} />
            <div className={classes.itemList}>
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        ))}
    </div>
  );
};
