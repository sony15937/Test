import Vue from 'vue'
import SvgIcon from '../../components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg',false,/\.svg$/)
const reqAll = requireContext => requireContext.keys().map(requireContext)

reqAll(req)
