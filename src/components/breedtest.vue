<template>
    <div>
        <el-tooltip placement="top">
            <div slot="content">
                创建时间：{{  breeddata.created  }}<br />
                笼位编号：{{  breeddata.id  }}<br />
                笼位类别：{{  breeddata.type  }}
            </div>
            <div>
                <table class="syTable" border="1" align="center" @dblclick="gocage" :style="{width: width+'px'}">
                    <tbody>
                        <tr>
                            <td colspan="1" rowspan="1">
                                {{ breeddata.project_id }}
                            </td>
                            <td colspan="1" rowspan="2">
                                {{  breeddata.wall_id.split('-')[0] + breeddata.wall_id.split('-')[1] + '-' +
                                breeddata.x_axis +
                                breeddata.y_axis
                                }}
                            </td>
                        </tr>

                        <tr>
                            <td colspan="1" rowspan="1" >
                                {{  breeddata.created  }}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1" style="color: red;">
                                <span v-for="(mice, index) in breeddata.ccd.females">
                                    {{  mice.id  }}
                                </span>
                                
                            </td>
                            <td colspan="1" rowspan="1" style="color: blue;">
                                <span>
                                    {{  breeddata.ccd.male.id  }}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" rowspan="1">
                                {{  breeddata.created  }}
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
    name: "fanzhitest",
    data() {
        return {
        }
    },
    methods: {
        gocage() {
            this.$router.push({ path: '/breedingcage', query: { data: this.breeddata } })
        },
    },
    props: {
        breeddata: {
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
        background-color: #f7f7a8;
        border: 2px solid black;
        font-weight: 600;
        color: black;

        td {
            border: 2px solid black;
        }
    }
}
</style>