import Cookie from 'js-cookie'
import api from '../../api'
const state = {
    userName:Cookie.get('app_user_name')? Cookie.get('app_user_name'):'',
    userRole: Cookie.get('app_user_role')? Cookie.get('app_user_role'):''
}

const mutations = {
    SET_USER_INFO(state,userInfo){
        state.userName = userInfo.name
        state.userRole = userInfo.role
        Cookie.set('app_user_name',userInfo.name)
        Cookie.set('app_user_role',userInfo.role)
    },
    RESET_STATE(state){
        Cookie.remove('app_user_name')
        Cookie.remove('app_user_role')
        state.userName = ''
        state.userRole = ''
    }
}

const actions = {
    login({commit},userInfo){
        const {userName,password} = userInfo
        return new Promise((resolve, reject) => {
            api.get(`/user/get/${userName}`).then(res=>{
                if(res.data.password === password){
                    commit('SET_USER_INFO',{name:res.data.id,role:res.data.role})
                    resolve()
                }
                else{
                    reject('id or password error')
                }
            })
        })
    },
    logout({commit}){
        commit('RESET_STATE')
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
