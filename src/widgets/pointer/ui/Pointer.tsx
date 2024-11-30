import {
  PointerBody,
  PointerBodyProps,
} from '@/widgets/pointer/ui/PointerBody';
import {
  PointerHeader,
  PointerHeaderProps,
} from '@/widgets/pointer/ui/PointerHeader';
import { PointerSkeleton } from '@/widgets/pointer/ui/PointerSkeleton';

import classes from './Pointer.module.scss';

type TPointerProps = { isLoading?: boolean } & PointerHeaderProps &
  PointerBodyProps;

export const Pointer = ({ isLoading, ...rest }: TPointerProps) => {
  return (
    <>
      {isLoading ? (
        <PointerSkeleton />
      ) : (
        <div className={classes.container}>
          <PointerHeader {...rest} />
          <PointerBody {...rest} />
        </div>
      )}
    </>
  );
};