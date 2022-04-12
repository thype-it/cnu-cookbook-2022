import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export const DeleteModal = ({show, onCancel, title, onDelete}) => {


  const toggleModal = () => {
    onCancel(false)
  }

  const deleteRecipe = () => {
    onDelete(true)
  }

  return (
    <>
      <Modal
        isOpen={show}
        toggle={onCancel}
      >
        <ModalHeader toggle={toggleModal}>
          Odstrániť recept
        </ModalHeader>
        <ModalBody>
          Určitě chcete odstrániť recept <strong>{title}</strong> ?
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={deleteRecipe}
          >
            Odstrániť
          </Button>
          <Button onClick={toggleModal}>
            Zrušiť
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
