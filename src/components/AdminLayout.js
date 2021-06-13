import React from 'react';
import {Link} from "react-router-dom";

const AdminLayout = (props) => {
    return (
        <div className="admin-layout">
            <div className="admin-layout-left">
                <div className="user-info d-flex justify-content-between align-items-center">
                    <div>
                        <img src="/images/user.svg" alt=""/>
                    </div>
                    <div>
                        <h5 className="mb-1">Abdunosirov Samandar</h5>
                        <p className="mb-0">Adminiatrator</p>
                    </div>
                </div>
                <div className="men">
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/menus" ? 'active' : ""}`}>Menular</Link></li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/nevs" ? 'active' : ""}`}>Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>Yangiliklar</Link></li>
                        <li className="nav-item"><Link to="/admin" className={`nav-link ${props.history.location.pathname === "/admin/" ? 'active' : ""}`}>Yangiliklar</Link></li>
                    </ul>
                </div>
            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;