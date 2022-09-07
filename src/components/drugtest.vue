<template>
    <div>
        <el-tooltip placement="top">
            <div slot="content">
                创建时间：{{  drugdata.created  }}<br />
                笼位编号：{{  drugdata.id  }}<br />
                笼位类别：{{  drugdata.type  }}
            </div>
            <div>
                <table class="syTable" border="1"  align="center" @dblclick="gocage" :style="{width:width+'px'}">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                {{  drugdata.project_id + '-' + drugdata.experiment_id  }}
                            </td>
                            <td colspan="1" rowspan="2">
                                {{  drugdata.wall_id.split('-')[0] + drugdata.wall_id.split('-')[1] + '-' +
                                drugdata.x_axis +
                                drugdata.y_axis
                                }}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1">
                                {{  drugdata.dtcd.gender  }}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" rowspan="1">
                                {{  drugdata.dtcd.details.测试药品 + '-' + drugdata.dtcd.details.药物浓度  }}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" rowspan="1" v-if="drugdata.dtcd.gender === 'M'">
                                <span style="color:rgb(5, 38, 250)" v-for="id in drugdata.mice">
                                    {{  id.id  }}
                                </span>
                            </td>
                            <td colspan="2" rowspan="1" v-else>
                                <span style="color:red" v-for="id in drugdata.mice">
                                    {{  id.id  }}
                                </span>
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
    name: "drugtest",
    data() {
        return {
        }
    },
    methods: {
        gocage() {
            this.$router.push({ path: '/experimentcage', query: { data: this.drugdata } })
        },
    },
    props: {
        drugdata: {
            type: Object,
            defalut: () => { },
        },
        width: {
            type: Number,
        }
    }
}

</script>
<style lang="less" scoped>
.syTable {
    margin:2px;
    height:100px;
    width: 130px;
    border-collapse: collapse;
    font-size: calc(100vw * 10 / 1920);
    
    text-align:center;

    tr {
        background-color: rgb(123, 209, 237);
        border: 2px solid black;
        font-weight: 600;
        color: black;
        
        

        td {
            border: 2px solid black;
        }
    }
}
</style>