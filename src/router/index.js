import Vue from 'vue'
import Router from 'vue-router'
import collage_goods from '../components/collage/collage_goods'
import no_beginning_collage from '../components/CommodityDetails/no_beginning_collage.vue'
import Finished_collage from '../components/CommodityDetails/Finished_collage.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'collage_goods',
        component: collage_goods
    }, {
        path: '/no_beginning_collage/:info',
        name: 'no_beginning_collage',
        component: no_beginning_collage
    }, {
        path: '/Finished_collage/:info',
        name: 'Finished_collage',
        component: Finished_collage
    }]
})