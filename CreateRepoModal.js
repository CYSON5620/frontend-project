// CreateRepoModal.js
import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from '@chakra-ui/react';

const CreateRepoModal = ({ isOpen, onClose, onCreateRepo }) => {
  const [repoName, setRepoName] = useState('');

  const handleCreateRepo = () => {
    // Perform validation if needed
    onCreateRepo(repoName);
    setRepoName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Repository</ModalHeader>
        <ModalBody>
          <Input placeholder="Repository Name" value={repoName} onChange={(e) => setRepoName(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateRepo}>
            Create
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateRepoModal;
