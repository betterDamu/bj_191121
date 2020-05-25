<template>
    <div class="goods">
        <div class="content">
            <div class="menuWrap" ref="menuWrap">
                <ul class="menulist">
                    <li class="menu" :class="{active:currentIndex===index}"
                        v-for="(good,index) in goods" :key="index">
                        <v-icon class="icon" v-if="good.type >=0" size="3" :type="good.type"></v-icon>
                        <span>{{good.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="goodWrap" ref="goodWrap">
                <ul class="goodList" ref="goodList">
                    <li class="good" v-for="(good,index) in goods" :key="index">
                        <h2 class="goodName">{{good.name}}</h2>
                        <ul class="foodlist">
                            <li class="foodWrap" v-for="(food,index) in good.foods" :key="index">
                                <v-food :food="food"></v-food>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cart"></div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    import {mapState,mapActions} from "vuex";
    import {GETGOODS} from "store/mutation_types.js";
    import food from "components/food/food";
    export default {
        name: "goods",
        data(){
          return {
              tops:[], //存每一项滑到顶部时;右侧滑屏元素滑动的距离
              scrollY:0 //存右侧滑屏元素滑屏的实时距离
          }
        },
        computed:{
            ...mapState(["goods"]),
            currentIndex(){
                //当前这个currentIndex代表的是左侧列表的哪个li该选中!!!!
                /*
                    在右侧列表初始化的时候; 我们去拿到一个数组;该数组中存放每一项滑动顶部时;整个滑屏元素滑动的距离
                    当右侧列表在滑动的时候! 我们去拿到右侧列表滑动到的一个实时位置
                */
                let {tops,scrollY} = this;
                let index = tops.findIndex((top,index)=>{
                    return scrollY >=top && scrollY < tops[index+1]
                })
                return index;
            }
        },
        methods:{
            ...mapActions([GETGOODS]),
            //初始化tops
            initTops(){
                //拿到右侧列表每一项的高度  确保这个时候所有的li已经渲染成功
                this.$nextTick(()=>{
                    let goodList = this.$refs.goodList;
                    let goods = goodList.children;
                    let top = 0;
                    let tops = [top];
                    Array.from(goods).forEach((good)=>{
                        top += good.offsetHeight;
                        tops.push(top)
                    })
                    this.tops = tops;
                })
            },
            //初始化滑屏
            initScroll(){
                this.$nextTick(()=>{
                    /*
                       让左右列表都产生滑动;
                       当右侧列表滑动时;滑到一个具体的分类后,这个分类所对应的左侧列表得选中;还得尽量的往包裹区域的顶部滑
                   */
                    let menuScroll = new BScroll(this.$refs.menuWrap);
                    let goodScroll = new BScroll(this.$refs.goodWrap,{probeType:3});
                    goodScroll.on("scroll",({x,y})=>{
                        this.scrollY = Math.abs(y)
                    })
                })
            }
        },
        async mounted(){
            //触发一个action的调用!!!  在action中我们发送了获取goods的请求
            //这行代码本质上最终要运行两个异步逻辑:
            //      1.发送请求获取数据是异步的 2.请求回来之后数据得到改变 vue让界面更新的过程也是异步的
            // actions的调用 它返回的是一个promise 当前这个promise只有当整个action的逻辑被全部执行完之后才会改变
            await this[GETGOODS]();

            //所有和dom尺寸 位置 数量相关的操作最好都放在对应数据改变之后的那个nextTick中
            this.initScroll();
            this.initTops();
        },
        components:{
            "v-food":food
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    .goods
        flex 1
        display flex
        flex-direction column
        overflow hidden
        .content
            flex 1
            display flex
            overflow hidden
            .menuWrap
                flex-basis 80px
                .menulist
                    .menu
                        one-px(rgba(7,17,27,.1))
                        height 54px
                        background #f3f5f7
                        font-size 12px
                        display flex
                        justify-content center
                        align-items center
                        .icon
                            margin-right 3px
                        &.active
                            background pink
                        &:last-child
                            border-none()
            .goodWrap
                flex 1
                overflow hidden
                .goodList
                    .good
                        .goodName
                            height 26px
                            line-height 26px
                            font-size 12px
                            font-weight 800
                            background #f3f5f7
                            border-left 3px solid #d9dde1
                            padding-left 14px
                            color rgba(147,153,159,1)
                        .foodlist
                            .foodWrap
                                one-px(rgba(7,17,27,.1))
                                padding 18px
                                position relative
                                &:after
                                    width 80%
                                    left 0
                                    right 0
                                    margin auto
                                &:last-child
                                    border-none()
        .cart
            flex-basis 50px

</style>