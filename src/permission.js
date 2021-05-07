import router from "./router";
import Cookie from 'js-cookie'

router.beforeEach((to, from, next) => {
    const role = Cookie.get('app_user_role')
    if(role){
        if(to.path === '/login')
            next('/')
        else if(!to.meta.role || to.meta.role.includes(role))
            next()
        else
            next('/')
    }
    else{
        if(to.path === '/login')
            next()
        else
            next('/login')
    }
})
