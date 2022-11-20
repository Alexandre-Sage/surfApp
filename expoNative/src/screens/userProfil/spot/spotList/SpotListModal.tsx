import React from 'react';
import { } from 'react-native';
import { Modal, useModal, ModalProps } from '@sage/surf-app-ui-lib';
import { CurrentLocationInterface } from '../../../../interfaces/currentLocation';
import { SpotListInterface } from '../../../../interfaces/spotInterfaces';
import { SpotList } from './SpotList';

interface SpotListModalProps extends Omit<ModalProps, "children"> {
  spotList: Array<SpotListInterface>;
  setMapLocation: (param: CurrentLocationInterface) => void;
};

export const SpotListModal = ({ toggleModal, spotList, onClose, setMapLocation }: SpotListModalProps) => {
  return (
    <Modal
      style={{
        position: "absolute",
        borderWidth: 1,
        borderColor: "red",
      }}
      onClose={onClose}
      toggleModal={toggleModal}
    >
      <SpotList
        setMapLocation={setMapLocation}
        spotList={spotList}
      />
    </Modal>
  )
}