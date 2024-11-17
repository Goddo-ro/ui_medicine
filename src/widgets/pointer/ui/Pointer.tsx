import {
  IPointerBodyProps,
  PointerBody,
} from '@/widgets/pointer/ui/PointerBody';
import {
  IPointerHeaderProps,
  PointerHeader,
} from '@/widgets/pointer/ui/PointerHeader';

import classes from './Pointer.module.scss';

type TPointerProps = IPointerHeaderProps & IPointerBodyProps;

// TODO: add skeletons

export const Pointer = (props: TPointerProps) => {
  return (
    <div className={classes.container}>
      <PointerHeader {...props} />
      <PointerBody {...props} />
    </div>
  );
};
