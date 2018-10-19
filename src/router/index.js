import Vue from 'vue'
import Router from 'vue-router'
import collage_goods from '../components/collage/collage_goods'
import no_beginning_collage from '../components/CommodityDetails/no_beginning_collage.vue' //未开始
import Finished_collage from '../components/CommodityDetails/Finished_collage.vue' //已结束
import already_bought from '../components/CommodityDetails/already_bought.vue' //已售罄
import collageing from '../components/CommodityDetails/collageing.vue' //已售罄
import JoinTheGroup from '../components/CommodityDetails/JoinTheGroup.vue' //去参团

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
    }, {
        path: '/already_bought/:info',
        name: 'already_bought',
        component: already_bought
    }, {
        path: '/collageing/:info',
        name: 'collageing',
        component: collageing
    }, {
        path: '/JoinTheGroup/:info',
        name: 'JoinTheGroup',
        component: JoinTheGroup
    }]
})