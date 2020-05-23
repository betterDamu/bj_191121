<template>
    <div class="list">
        <ul>
            <li>
                <v-icon class="icon" size="2" type="discount"></v-icon>
                <span class="text">在线支付满28送老板</span>
            </li>
            <li>
                <v-icon class="icon" size="2" type="decrease"></v-icon>
                <span class="text">单人特色套餐</span>
            </li>
            <li>
                <v-icon class="icon" size="2" type="guarantee"></v-icon>
                <span class="text">特价饮品八折抢购</span>
            </li>
            <li>
                <v-icon class="icon" size="2" type="invoice"></v-icon>
                <span class="text">海狗人参丸免费赠送</span>
            </li>
            <li>
                <v-icon class="icon" size="2" type="special"></v-icon>
                <span class="text">清肺雪梨汤八折起售</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import icon from "components/icon/icon"
    export default {
        name: "list",
        components:{
            "v-icon":icon
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .list
        width 80%
        box-sizing border-box
        margin 0 auto
        margin-top 24px
        margin-bottom 28px
        padding 0 12px
        & > ul
            & > li
                display flex
                align-items center
                margin-bottom 12px
                &:last-child
                    margin-bottom 0
                .icon
                    margin-right 6px
                .text
                    font-size 12px
                    line-height 12px
                    color rgba(255,255,255,1)
                    font-weight 200
</style>