import React from 'react';
import {API_PATH} from "../tools/constants";
import {getText} from "../locales";

const Basic = (props) => {
    return (
        <div className="grey">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="oq bg-white">

                            <div className="d-flex mb-5 align-items-center">
                                <a href="#" className="text-decoration-none mr-4">
                                    {props.news.menuNameUz}
                                </a>
                                <img className="mr-2 ml-2" src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 mr-4">{props.news.createdAt?.slice(-8,-3)} / {props.news.createdAt?.slice(0,11)}</p>
                                    <img className="ml-2 mr-2" src="/image/koz.svg" alt="Error"/>
                                        <a href="#" className="text-decoration-none mr-4 text-dark">{props.news.viewCount}</a>
                                        {/*<img src="/image/sms.svg" className="ml-2 mr-2" alt="Error"/>*/}
                                        {/*    <p className="mb-0">100</p>*/}
                            </div>
                            <h4>{props.news.titleUz}</h4>
                            <img src={API_PATH + "file/get/"+ props.news.photo} alt=""/>
                            <p className="text">{props.news.descriptionUz}
                            </p>

                            <div className="border my-5"></div>

                            <div className="d-flex mb-4 justify-content-between">
                                <h3>{getText("mi")}</h3>
                                <h3>{getText("fikr")}</h3>
                            </div>
                            <div className="d-flex mb-4 input1 align-items-center">
                                <img src="/image/use.svg" alt="Error"/>
                                    <input type="text" className="" placeholder="Izoh qoldirishingiz mumkin..."/>
                            </div>
                            <div className="d-flex mb-5 main align-items-center">
                                <img src="/image/nigina.svg" alt="Error"/>
                                    <div className="main2">
                                        <h4 className="mb-0">{getText("nk")}</h4>
                                        <p className="my-2">{getText("tb")}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <img src="/image/yurak.svg" alt="Error"/>
                                                <p className="mb-0">{getText("jb")}</p>
                                                <p className="mb-0">{getText("avval")}</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="d-flex align-items-center main3">
                                <img src="/image/sahar.svg" alt="Error"/>
                                    <div className="main4">
                                        <h4 className="mb-0">{getText("nk")}</h4>
                                        <p className="my-2">{getText("tb")}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <img src="/image/qizilyurak.svg" alt="Error"/>
                                                <p className="mb-0">{getText("jb")}</p>
                                                <p className="mb-0">{getText("avval")}</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="top oq bg-white">
                            <h3>{getText("media")}</h3>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">{getText("foto")}</h5>
                            </div>
                            <h4>{getText("do")}</h4>
                            <div className="border my-3"></div>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">{getText("foto")}</h5>
                            </div>
                            <h4>{getText("xb")}</h4>
                            <div className="border my-3"></div>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">{getText("video")}</h5>
                            </div>
                            <h4>{getText("ak")}</h4>
                            <div className="border my-3"></div>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">{getText("foto")}</h5>
                            </div>
                            <h4>{getText("xb")}</h4>
                        </div>
                        <div className="bottom text-center">
                            <h6>{getText("sh")}</h6>
                            <img className="my-4" src="/image/treangle.svg" alt="Error"/>
                                <h6>
                                    {getText("di")}
                                </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basic;