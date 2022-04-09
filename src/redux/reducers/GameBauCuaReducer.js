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
        if(index != -1){
            if(action.tangGiam && state.tongDiem > 0){
                danhSachCuocUpdate[index].diemCuoc += 100;
                state.tongDiem -=100;
            }else{
                if(danhSachCuocUpdate[index].diemCuoc > 0){
                    danhSachCuocUpdate[index].diemCuoc -= 100;
                    state.tongDiem +=100;
                }
            }
            
        }

        state.danhSachCuoc = danhSachCuocUpdate;
        console.log(state.danhSachCuoc);
        console.log(state.tongDiem);
    }
 
  default:
    return state
  }
}

export default GameBauCuaReducer
