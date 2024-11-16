import { PointerBody } from '@/pages/pointer/ui/PointerBody';
import { PointerHeader } from '@/pages/pointer/ui/PointerHeader';

import classes from './Pointer.module.scss';

export type IPointerParams = {
  letter: string;
};

export const Pointer = () => {
  return (
    <div className={classes.container}>
      <PointerHeader />
      <PointerBody />
    </div>
  );
};
