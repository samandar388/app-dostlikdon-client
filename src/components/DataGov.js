import React from 'react';
import {getText} from "../locales";

const DataGov = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col katta text-center p-3">
                    <img src="/image/gerb.svg" className="mb-3" alt="Error"/>
                    <p>{getText("oz")}</p>
                    <div class="layer3">
                        <h3>data.gov.uz</h3>
                    </div>
                </div>
                <div className="col katta text-center p-3">
                    <img src="/image/treangle.svg" className="mb-3" alt="Error"/>
                    <p>{getText("da")}</p>
                    <div class="layer3">
                        <h3>data.gov.uz</h3>
                    </div>
                </div>
                <div className="col katta text-center p-3">
                    <img src="/image/kvadrat.svg" className="mb-3" alt="Error"/>
                    <p>{getText("or")}</p>
                    <div class="layer3">
                        <h3>data.gov.uz</h3>
                    </div>
                </div>
                <div className="col katta text-center p-3">
                    <img src="/image/qul.svg" className="mb-3" alt="Error"/>
                    <p>{getText("orm")}</p>
                    <div class="layer3">
                        <h3>data.gov.uz</h3>
                    </div>
                </div>
                <div className="col katta text-center p-3">
                    <img src="/image/dustlikdon.svg" className="mb-3" alt="Error"/>
                    <p>{getText("oa")}</p>
                    <div class="layer3">
                        <h3>data.gov.uz</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataGov;