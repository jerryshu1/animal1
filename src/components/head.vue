<template>
    <div>
        <div style="margin:2px;width:130px;height:10px;background-color:rgb(223, 223, 223);">
            {{data}}
        </div>
    </div>
</template>

<script>

export default {
    name: "emptytest",
    data() {
        return {
        }
    },
    methods: {
        // gocage() {
        //     this.$router.push({ path: '/feedingcage', query: { data: this.feeddata } })
        // },
    },
    props: {
        data: {
            type: String,
            default: () => ''
        }
    }
}

</script>
<style lang="less" scoped>
.syTable {
    width: 130px;
    margin: 2px;
    height: 100px;
    border-collapse: collapse;
    font-size: 10px;
    text-align: center;

    tr {
        background-color: rgb(223, 223, 223);
        border: 2px solid black;
        font-weight: 600;
        color: black;

        td {
            border: 2px solid black;
        }
    }
}
</style>