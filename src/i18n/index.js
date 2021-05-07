import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en/lang'
import tw from './tw/lang'

Vue.use(VueI18n,{})

const locale = localStorage.getItem('locale') || 'tw'

const i18n = new VueI18n({
    locale,
    messages:[en,tw]
})

export default i18n
