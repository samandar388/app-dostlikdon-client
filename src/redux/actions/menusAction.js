import {UPDATE_STATE} from "../types/menusTypes";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";


export function updateState(data) {
    return {
        type: UPDATE_STATE,
        payload: data
    }
}

export function saveMenu(event, errors, values) {
    return function (dispatch) {

        axios.post(API_PATH + "menu", values)
            .then((res)=> {
                dispatch(getMenus());
                dispatch(getMainMenus());
                toast.success(res.data.message);
                dispatch(updateState({open: false, submenu: false, url: ""}));
                console.log(res);
            })
    }
}

export const getMenus = () => (dispatch) => {
    axios.get(API_PATH + "menu/all")
        .then((res) =>{
            console.log(res);
            dispatch(updateState({menus: res.data.data}));
        })
};


export const getMainMenus =()=>(dispatch)=>{
    axios.get(API_PATH + "men")
        .then((res)=>{
            dispatch(updateState({mainMenus: res.data.data}));
        })
}


export const deleteMenu = () => (dispatch, getState) => {
    console.log(getState());


    axios.delete(API_PATH + "menu/" + getState().menus.selectedIndex)
        .then((res)=>{
            console.log(res);
            dispatch(getMenus());
            toast.success(res.data.message);
            dispatch(updateState({deleteModal: false}));

        })
}