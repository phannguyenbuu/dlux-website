import React from "react";
import './Component.css';
import LayoutWidgetBase from './LayoutWidgetBase';

const ContactWidget = ({ color1, color2, bannerData, ...props }) => (
  <>
  <style>
        {`
        #contact
        @media screen and (max-width: 1000px) {
          p {
            width: 80vw !important;
            }
          }
        `}
    </style>
    <div id = 'contact'>
      <LayoutWidgetBase color1 = {color1} color2 = {color2} bannerData={bannerData}>{props.children}</LayoutWidgetBase>
    </div>
    
  </>
);

export default ContactWidget;
