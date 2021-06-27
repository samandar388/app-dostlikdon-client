import React from 'react';
import {getText} from "../locales";

const Reference = () => {
    return (
        <div className="gradient d-flex justify-content-between align-items-center">
            <img src="/image/check.svg" alt="Error"/>
            <h4 className="text">{getText("sh")}</h4>
            <button type="button" className="btn btn-success text-white">{getText("my")}</button>
            <img src="/image/planshet.svg" alt="Error"/>
        </div>
    );
};

export default Reference;