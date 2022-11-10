import React from 'react';
import { } from 'react-native';
import { Modal, useModal, ModalProps } from '../../../../components/modals/Modal';
import { SpotListInterface } from '../../../../interfaces/spotInterfaces';
import { SpotList } from './SpotList';

interface SpotListModalProps extends Omit<ModalProps, "children"> {
  spotList: Array<SpotListInterface>;
};

export const SpotListModal = ({ toggleModal, spotList, onClose }: SpotListModalProps) => {
  return (
    <Modal
      onClose={onClose}
      toggleModal={toggleModal}
    >
      <SpotList
        spotList={spotList}
      />
    </Modal>
  )
}