import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutePage from './route-page';

window.TITLE = 'EcoMove Hà Nội - Vĩnh Phúc';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <RoutePage name="Hà Nội - Vĩnh Phúc"
                  images={["https://images.unsplash.com/photo-1651108143947-3290f61c037e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://upload.wikimedia.org/wikipedia/commons/8/8e/B%C6%B0u_%C4%91i%E1%BB%87n_t%E1%BB%89nh_V%C4%A9nh_Ph%C3%BAc.jpg",
                    "https://images.unsplash.com/photo-1612917231506-a0825d1bc76d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1658134424346-89203c9991c1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://plus.unsplash.com/premium_photo-1682309623835-d15358bcb195?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://plus.unsplash.com/premium_photo-1661331790431-ebac4aed563e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1444312645910-ffa973656eba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]}
            />
        </React.StrictMode>
    );
}