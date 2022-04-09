import React from 'react';
import Quancuoc from './QuanCuoc';
import {useSelector} from 'react-redux'

const Danhsachcuoc = (props) => {

    const danhSachCuoc = useSelector(state => state.GameBauCuaReducer.danhSachCuoc);

    console.log(danhSachCuoc);

    const renderDanhSachCuoc = () => {
        return danhSachCuoc.map((item,index)=>{
            return <div className='col-4' key={index}>
            <Quancuoc quanCuoc={item} />
        </div>
        })
    }

    return (
        <div>
            <div className='row mt-5'>
                {renderDanhSachCuoc()}
                
            </div>
        </div>
    );
}

export default Danhsachcuoc;
