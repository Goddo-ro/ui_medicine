import { Modal, ModalProps } from '@mui/material';

import classes from './PositionedModal.module.scss';

interface PositionedModalProps extends ModalProps {
  width?: number;
}

export const PositionedModal = ({
  width = 400,
  ...rest
}: PositionedModalProps) => {
  return (
    <Modal {...rest}>
      <div style={{ width }} className={classes.content}>
        {rest.children}
      </div>
    </Modal>
  );
};
