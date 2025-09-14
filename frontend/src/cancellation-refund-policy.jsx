import React from 'react';
import ReactDOM from 'react-dom/client';

import LayoutCommon from './common';

// import TextPreciseWidget from '../../components/TextPreciseWidget';
// import preciseLinks from './json/precise.json';

window.TITLE = 'EcoMove - Blog';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  // Bạn có thể truyền index ở đây, ví dụ index=0
  root.render(
    <React.StrictMode>
      <LayoutCommon menuLeft="60">
        {/* <TextPreciseWidget /> */}
      </LayoutCommon>
    </React.StrictMode>
  );
}

