<template>
    <div>
        <el-tooltip placement="top">
            <div slot="content">
                创建时间：{{  feeddata.created  }}<br />
                笼位编号：{{  feeddata.id  }}<br />
                笼位类别：{{  feeddata.type  }}
            </div>
            <div>
                <table class="syTable" border="1" align="center" @dblclick="gocage" :style="{width: width+'px'}">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                {{ feeddata.task_id }}
                            </td>
                            <td colspan="1" rowspan="2">
                                {{  feeddata.wall_id.split('-')[0] + feeddata.wall_id.split('-')[1] + '-' +
                                feeddata.x_axis +
                                feeddata.y_axis
                                }}
                            </td>
                        </tr>
                        <!-- //根据性别 显示不同的颜色 -->
                        <tr>
                            <td colspan="1" rowspan="1" v-if="feeddata.fcd.gender === 'M'">
                                <span style="color:blue">
                                    {{  feeddata.fcd.gender  }}
                                </span>
                            </td>
                            <td colspan="1" rowspan="1" v-else>
                                <span style="color:red">
                                    {{ feeddata.fcd.gender  }}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" rowspan="1" >
                                <span  v-for="id in feeddata.mice">
                                    {{  id.id  }}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" rowspan="1">
                                {{feeddata.fcd.dob}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </el-tooltip>
    </div>


</template>

<script>
export default {
    name: "siyangtest",
    data() {
        return {
        }
    },
    methods: {
        gocage() {
            this.$router.push({ path: '/feedingcage', query: { data: this.feeddata } })
        },
    },
    props: {
        feeddata: {
            type: Object,
            defalut: () => { },
        },
        width: {
            type: Number
        }
    }
}

</script>
<style lang="less" scoped>
.syTable {
    margin:2px;
    height:100px;
    border-collapse: collapse;
    font-size:10px;
    text-align:center;

    tr {
        background-color: white;
        border: 2px solid black;
        font-weight: 600;
        color: black;

        td {
            border: 2px solid black;
        }
    }
}
</style>