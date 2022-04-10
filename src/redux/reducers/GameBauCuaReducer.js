const initialState = {
    danhSachCuoc: [
        {ma:'ga',hinhAnh:'./img/GameBauCua/ga.png',diemCuoc:0},
        {ma:'bau',hinhAnh:'./img/GameBauCua/bau.png',diemCuoc:0},
        {ma:'ca',hinhAnh:'./img/GameBauCua/ca.png',diemCuoc:0},
        {ma:'nai',hinhAnh:'./img/GameBauCua/nai.png',diemCuoc:0},
        {ma:'cua',hinhAnh:'./img/GameBauCua/cua.png',diemCuoc:0},
        {ma:'tom',hinhAnh:'./img/GameBauCua/tom.png',diemCuoc:0}
    ],
    tongDiem:1000,
    mangXucXac: [
        {ma:'nai',hinhAnh:'./img/GameBauCua/nai.png'},
        {ma:'cua',hinhAnh:'./img/GameBauCua/cua.png'},
        {ma:'tom',hinhAnh:'./img/GameBauCua/tom.png'}
    ]

}

export const GameBauCuaReducer =  (state = initialState, action) => {
  switch (action.type) {

    case 'DAT_CUOC_BAU_CUA':{
        console.log('action',action);
        
        //tìm trong danh sách cược => quân cược nào đc click thì sẽ tăng giảm điểm
        const danhSachCuocUpdate = [...state.danhSachCuoc];
        const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
        if(index !== -1){
            if(action.tangGiam){
                if(state.tongDiem > 0){
                    danhSachCuocUpdate[index].diemCuoc += 100;
                    state.tongDiem -=100;
                }
            }else{
                if(danhSachCuocUpdate[index].diemCuoc > 0){
                    danhSachCuocUpdate[index].diemCuoc -= 100;
                    state.tongDiem +=100;
                }
            }
            
        }

        state.danhSachCuoc = danhSachCuocUpdate;
        return {...state}
    }

    case 'PLAY_GAME_BAU_CUA':{
        console.log(state.tongDiem);
        const mangXucXacNgauNhien = [];

        for (let i = 0; i < 3; i++) {
            // tạo số ngấu nhiên 0-5
            let soNgauNhien = Math.floor(Math.random() * 6);
            const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
            mangXucXacNgauNhien.push(xucXacNgauNhien);
        }
        state.mangXucXac = mangXucXacNgauNhien;
        
        //thưởng tiền
        mangXucXacNgauNhien.forEach((xucXacNN,index)=>{
            let indexDSCuoc = state.danhSachCuoc.findIndex(qc=>qc.ma === xucXacNN.ma);
            if(index !== -1 ){
                state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc;
            }
        })

        //xử lý hoàn tiền
        state.danhSachCuoc.forEach((qc,index)=>{
            let indexXucXacNN = mangXucXacNgauNhien.findIndex(XucXacNN => XucXacNN.ma === qc.ma);
            if(indexXucXacNN !== -1){
                state.tongDiem += qc.diemCuoc;
            }
        })

        state.danhSachCuoc  = state.danhSachCuoc.map((qc,index)=>{
            return {...qc,diemCuoc:0}
        })

        return {...state}
    }

    case 'CHOI_LAI':{
        state.tongDiem = 1000;
        state.danhSachCuoc = state.danhSachCuoc.map((qc,index)=>{
            return {...qc,diemCuoc:0}
        });
        return {...state}
    }
 
  default:
    return state
  }
}

export default GameBauCuaReducer
