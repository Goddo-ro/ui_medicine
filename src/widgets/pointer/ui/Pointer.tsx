import {
  PointerBody,
  PointerBodyProps,
} from '@/widgets/pointer/ui/PointerBody';
import {
  PointerHeader,
  PointerHeaderProps,
} from '@/widgets/pointer/ui/PointerHeader';

import classes from './Pointer.module.scss';

type TPointerProps = PointerHeaderProps & PointerBodyProps;

// TODO: add skeletons

export const Pointer = (props: TPointerProps) => {
  return (
    <div className={classes.container}>
      <PointerHeader {...props} />
      <PointerBody {...props} />
    </div>
  );
};
