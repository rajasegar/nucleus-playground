import React, { useState } from 'react';
import { Button, Modal } from '@freshworks/react-nucleus';

export default function() {
     const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  return (
        <div>
            <Button inline onClick={open}>
                Open Dialog
            </Button>
            <Modal isOpen={showDialog} onDismiss={close}>
              {/* <MockContent close={close} /> */}
                <h1>Hello World</h1>
            </Modal>
        </div>
    )
}
