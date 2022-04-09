import React from 'react';
import Xucxac from './XucXac';
import { useSelector,useDispatch } from 'react-redux';

const Danhsachxucxac = () => {

    const {mangXucXac} = useSelector(state => state.GameBauCuaReducer)

    const dispatch = useDispatch();

    return (
        <div className='mt-5 ml-5'>
            <div className='bg-white' style={{width:350,height:350,borderRadius:175,marginLeft:100}}>
                <div className='row'>
                    <div className='col-12 text-center' style={{marginTop:'0',marginLeft:100}}>
                        <Xucxac xucXacItem={mangXucXac[0]} />
                    </div>
                    <div className='col-6 text-right'  style={{marginTop:'0',paddingLeft:30}} >
                        <Xucxac xucXacItem={mangXucXac[1]} />
                    </div>
                    <div className='col-6 text-right'  style={{marginTop:'0',paddingLeft:30}} >
                        <Xucxac xucXacItem={mangXucXac[2]} />
                    </div>
                </div>
                <div className='text-center mr-5'>
                    <button onClick={()=>{
                        dispatch({
                            type:'PLAY_GAME_BAU_CUA',

                        })
                    }} className='btn btn-danger' style={{width:75,height:50,fontSize:25}}>
                        Xóc
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Danhsachxucxac;
