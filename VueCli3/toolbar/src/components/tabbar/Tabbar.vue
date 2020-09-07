<template>
    <div class="">
        <div id="tab-bar">
            <div>首页</div>
            <div>分类</div>
            <div>购物车</div>
            <div>我的</div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'vueName',
        data() {
            return {
                msg: 'Welcome to your vueName'
            }
        }
    }
</script>

<style scoped lang="sass">
    .body {
        padding: 0px;
    }

    #tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }

    #tab-bar {
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 10px 10px 10px rgba(red, green, blue, alpha);
    }
</style>