import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/joy'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (isOpen) { //test point
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Google Map</h2>
        <div className="google-map">
          {/* Dummy Google Map component */}

          <div className="google-map">
            <Accordion>
              <AccordionSummary >
                <Typography>Accordion Title</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>This is the content of the accodion. Test point</Typography> 
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <button className="modal-close" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default Modal
