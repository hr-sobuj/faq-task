import React from "react";
import styles from './Accordion.module.css'

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="accordion-main">
        
        <div
          className={`accordion-title ${isOpen ? "open" : "close"}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };
  
  export default Accordion;
  