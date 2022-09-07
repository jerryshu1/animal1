<template>
    <div>
        <div style="margin:2px;height:100px;background-color:rgb(223, 223, 223);" :style="{width: width+'px'}">

        </div>
    </div>
</template>

<script>

export default {
    name: "emptytest",
    props: {
        width: {
            type: Number
        }
    }
}

</script>
<style lang="less" scoped>

</style>