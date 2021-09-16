import React, { useState } from 'react';
import { Button, Modal } from '@freshworks/react-nucleus';
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const ModalBody = styled.div`
  padding: 18px 32px 32px 32px;
`

const ModalFooter = styled.div`
  ${({
    theme: {
        colors: {
            components: { confirmModal },
        },
    },
}) => {
        return `
    justify-content: flex-end;
    display: flex;
    padding: 12px 16px 12px 16px;
    border-top: 1px solid ${confirmModal.border};
    background: ${confirmModal.background};
    border-radius: 4px;
  `
    }}
`
const MockContent = ({ close }: { close: () => void }) => {
    return (
        <>
            <ModalBody>
                <h4>Title goes here</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
                    dolore excepturi velit ut, ea earum ipsum aspernatur modi ex ipsa
                    repudiandae eaque amet sequi eligendi deserunt libero nobis asperiores
                    necessitatibus!
                </p>
            </ModalBody>
            <ModalFooter>
                <Flex>
                    <Button type="secondary" onClick={close}>
                        Cancel
                    </Button>
                    <div style={{ paddingLeft: '15px' }}>
                        <Button onClick={close}>Accept</Button>
                    </div>
                </Flex>
            </ModalFooter>
        </>
    )
}
export default function ModalPreview() {
    const [showDialog, setShowDialog] = useState(false)
    const open = () => setShowDialog(true)
    const close = () => setShowDialog(false)
    return (
        <div>
            <Button inline onClick={open}>
                Open Dialog
            </Button>
            <Modal isOpen={showDialog} onDismiss={close}>
                <MockContent close={close} />
            </Modal>
        </div>
    )
}
