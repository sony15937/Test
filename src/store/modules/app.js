import Cookie from 'js-cookie'
const state = {
    sidebar:{
        opened:Cookie.get('sidebarStatus')? !!+Cookie.get('sidebarStatus'):true, //側邊攔開關狀態
        withoutAnimation: false //側邊攔收合動畫
    },
    device: 'desktop' //裝置類型
}

const mutations = {
    TOGGLE_SIDEBAR(state){
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        if(state.sidebar.opened){
            Cookie.set('sidebarStatus',1)
        }
        else {
            Cookie.set('sidebarStatus',0)
        }
    },
    CLOSE_SIDEBAR(state,withoutAnimation){
        state.sidebar.opened = false
        Cookie.set('sidebarStatus',0)
        state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE(state,device){
        state.device =device
    }
}

const actions = {
    toggleSidebar({commit}){
        commit('TOGGLE_SIDEBAR')
    },
    closeSidebar({commit},{withoutAnimation}){
        commit('CLOSE_SIDEBAR',withoutAnimation)
    },
    toggleDevice({commit},device){
        commit('TOGGLE_DEVICE',device)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
