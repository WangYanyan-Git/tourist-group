import * as Types from '../../action-type';

let user={
    add(type){
        return {type:Types.U_ADD_USERNAME,payload:type}
    }
}