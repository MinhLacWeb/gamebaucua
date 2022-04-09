import React from 'react';
import Danhsachcuoc from './DanhSachCuoc';
import Danhsachxucxac from './DanhSachXucXac';
import Diemcuoc from './DiemCuoc';
import './GameBauCua.css';

const GameBauCua = () => {
    return (
        <div id='GameBauCua' className='container-fluid' style={{marginTop:0}}>
            <Diemcuoc />

            <div className='row'>
                <div className='col-8'>
                    <Danhsachcuoc />
                </div>
                <div className='col-4'>
                    <Danhsachxucxac />
                </div>
            </div>
        </div>
    );
}

export default GameBauCua;
