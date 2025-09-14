import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Component.css';
import UseIsMobile from './hooks/UseIsMobile';

function NavTabWidget({ navdata }) {
  const isMobile = UseIsMobile();
  const [activeKey, setActiveKey] = useState(navdata && navdata.length > 0 ? navdata[0].title : '');

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  return (
    <section style={{ width:'100vw', display:'flex', flexDirection:'column', 
      alignContent:'center', justifyContent:'center'}}>
      
        <Nav variant="tabs" activeKey={activeKey} onSelect={handleSelect} 
          style={{ display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'center' }}>
          {navdata.map(({ title }) => (
            <Nav.Item key={title}  style={{ display: 'flex', padding: '0px 25px' }}>
              <Nav.Link eventKey={title}>{title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      
      <div style={{ marginTop: 20 }}>
        {navdata.map(({ title, widget }) => (
          <div key={title} style={{ display: activeKey === title ? 'block' : 'none' }}>
            {widget}
          </div>
        ))}
      </div>
    </section>
  );
}

export default NavTabWidget;
