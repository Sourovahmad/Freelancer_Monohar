import React from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        width:"60%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function MyModal({isModalOpen, setIsOpen, children}) {
    
    

    function afterOpenModal() {
        
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal isOpen={isModalOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                {children}
            </Modal>
        </div>
    );
}

export default MyModal;