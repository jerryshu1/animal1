<template>
	<div>
		<head-top></head-top>
		
		<div>
			<el-table :data="tableData" style="width: 100%" :row-style="{ height: 'calc(13vh - 40px)' }"
				:cell-class-name="cellStyle" @cell-dblclick="gocage" border @cell-click="goshow">
				<el-table-column type="index" width="20px">
				</el-table-column>
				<el-table-column label="A" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.A.type === '实验笼' || scope.row.A.type === '繁殖笼' || scope.row.A.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.A.created  }}<br />
								笼位编号：{{  scope.row.A.id  }}<br />
								笼位类别：{{  scope.row.A.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.A.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.A.project_id + '-' + scope.row.A.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.A.shelf_id.split('-')[0] +
												scope.row.A.shelf_id.split('-')[1] + '-' + scope.row.A.x_axis +
												scope.row.A.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.A.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.A.dtcd.details.测试药品 + '-' +
											scope.row.A.dtcd.details.药物浓度
												}}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.A.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.A.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.A.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.A.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.A.project_id + '-' + scope.row.A.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.A.shelf_id.split('-')[0] +
												scope.row.A.shelf_id.split('-')[1] + '-' + scope.row.A.x_axis +
												scope.row.A.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.A.created  }}</td>
										</tr>

									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.A.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.A.project_id + '-' + scope.row.A.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.A.shelf_id.split('-')[0] +
												scope.row.A.shelf_id.split('-')[1] + '-' + scope.row.A.x_axis +
												scope.row.A.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.A.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.A.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.A.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.A.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.A.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.A.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="B" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.B.type === '实验笼' || scope.row.B.type === '繁殖笼' || scope.row.B.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.B.created  }}<br />
								笼位编号：{{  scope.row.B.id  }}<br />
								笼位类别：{{  scope.row.B.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.B.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.B.project_id + '-' + scope.row.B.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.B.shelf_id.split('-')[0] +
												scope.row.B.shelf_id.split('-')[1] + '-' + scope.row.B.x_axis +
												scope.row.B.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.B.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.B.dtcd.details.测试药品 + '-' +
											scope.row.B.dtcd.details.药物浓度
												}}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.B.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.B.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.B.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.B.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.B.project_id + '-' + scope.row.B.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.B.shelf_id.split('-')[0] +
												scope.row.B.shelf_id.split('-')[1] + '-' + scope.row.B.x_axis +
												scope.row.B.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.B.created  }}</td>
										</tr>

									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.B.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.B.project_id + '-' + scope.row.B.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.B.shelf_id.split('-')[0] +
												scope.row.B.shelf_id.split('-')[1] + '-' + scope.row.B.x_axis +
												scope.row.B.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.B.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.B.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.B.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.B.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.B.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.B.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="C" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.C.type === '实验笼' || scope.row.C.type === '繁殖笼' || scope.row.C.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.C.created  }}<br />
								笼位编号：{{  scope.row.C.id  }}<br />
								笼位类别：{{  scope.row.C.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.C.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.C.project_id + '-' + scope.row.C.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.C.shelf_id.split('-')[0] +
												scope.row.C.shelf_id.split('-')[1] + '-' + scope.row.C.x_axis +
												scope.row.C.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.C.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.C.dtcd.details.测试药品 + '-' +
											scope.row.C.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.C.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.C.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.C.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.C.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.C.project_id + '-' + scope.row.C.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.C.shelf_id.split('-')[0] +
												scope.row.C.shelf_id.split('-')[1] + '-' + scope.row.C.x_axis +
												scope.row.C.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.C.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.C.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.C.project_id + '-' + scope.row.C.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.C.shelf_id.split('-')[0] +
												scope.row.C.shelf_id.split('-')[1] + '-' + scope.row.C.x_axis +
												scope.row.C.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.C.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.C.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.C.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.C.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.C.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.C.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="D" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.D.type === '实验笼' || scope.row.D.type === '繁殖笼' || scope.row.D.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.D.created  }}<br />
								笼位编号：{{  scope.row.D.id  }}<br />
								笼位类别：{{  scope.row.D.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.D.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.D.project_id + '-' + scope.row.D.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.D.shelf_id.split('-')[0] +
												scope.row.D.shelf_id.split('-')[1] + '-' + scope.row.D.x_axis +
												scope.row.D.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.D.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.D.dtcd.details.测试药品 + '-' +
											scope.row.D.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.D.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.D.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.D.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.D.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.D.project_id + '-' + scope.row.D.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.D.shelf_id.split('-')[0] +
												scope.row.D.shelf_id.split('-')[1] + '-' + scope.row.D.x_axis +
												scope.row.D.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.D.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.D.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.D.project_id + '-' + scope.row.D.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.D.shelf_id.split('-')[0] +
												scope.row.D.shelf_id.split('-')[1] + '-' + scope.row.D.x_axis +
												scope.row.D.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.D.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.D.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.D.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.D.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.D.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.D.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="E" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.E.type === '实验笼' || scope.row.E.type === '繁殖笼' || scope.row.E.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.E.created  }}<br />
								笼位编号：{{  scope.row.E.id  }}<br />
								笼位类别：{{  scope.row.E.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.E.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.E.project_id + '-' + scope.row.E.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.E.shelf_id.split('-')[0] +
												scope.row.E.shelf_id.split('-')[1] + '-' + scope.row.E.x_axis +
												scope.row.E.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.E.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.E.dtcd.details.测试药品 + '-' +
											scope.row.E.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.E.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.E.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.E.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.E.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.E.project_id + '-' + scope.row.E.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.E.shelf_id.split('-')[0] +
												scope.row.E.shelf_id.split('-')[1] + '-' + scope.row.E.x_axis +
												scope.row.E.y_axis


												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.E.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.E.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.E.project_id + '-' + scope.row.E.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.E.shelf_id.split('-')[0] +
												scope.row.E.shelf_id.split('-')[1] + '-' + scope.row.E.x_axis +
												scope.row.E.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.E.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.E.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.E.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.E.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.E.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.E.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="F" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.F.type === '实验笼' || scope.row.F.type === '繁殖笼' || scope.row.F.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.F.created  }}<br />
								笼位编号：{{  scope.row.F.id  }}<br />
								笼位类别：{{  scope.row.F.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.F.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.F.project_id + '-' + scope.row.F.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.F.shelf_id.split('-')[0] +
												scope.row.F.shelf_id.split('-')[1] + '-' + scope.row.F.x_axis +
												scope.row.F.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.F.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.F.dtcd.details.测试药品 + '-' +
											scope.row.F.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.F.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.F.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.F.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.F.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.F.project_id + '-' + scope.row.F.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.F.shelf_id.split('-')[0] +
												scope.row.F.shelf_id.split('-')[1] + '-' + scope.row.F.x_axis +
												scope.row.F.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.F.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.F.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.F.project_id + '-' + scope.row.C.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.F.shelf_id.split('-')[0] +
												scope.row.F.shelf_id.split('-')[1] + '-' + scope.row.F.x_axis +
												scope.row.F.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.F.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.F.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.F.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.F.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.F.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.F.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="G" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.G.type === '实验笼' || scope.row.G.type === '繁殖笼' || scope.row.G.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.G.created  }}<br />
								笼位编号：{{  scope.row.G.id  }}<br />
								笼位类别：{{  scope.row.G.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.G.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.G.project_id + '-' + scope.row.G.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.G.shelf_id.split('-')[0] +
												scope.row.G.shelf_id.split('-')[1] + '-' + scope.row.G.x_axis +
												scope.row.G.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.G.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.G.dtcd.details.测试药品 + '-' +
											scope.row.G.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.G.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.G.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.G.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.G.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.G.project_id + '-' + scope.row.G.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.G.shelf_id.split('-')[0] +
												scope.row.G.shelf_id.split('-')[1] + '-' + scope.row.G.x_axis +
												scope.row.G.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.G.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.G.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.G.project_id + '-' + scope.row.G.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.G.shelf_id.split('-')[0] +
												scope.row.G.shelf_id.split('-')[1] + '-' + scope.row.G.x_axis +
												scope.row.G.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.G.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.G.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.G.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.G.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.G.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.G.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="H" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.H.type === '实验笼' || scope.row.H.type === '繁殖笼' || scope.row.H.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.H.created  }}<br />
								笼位编号：{{  scope.row.H.id  }}<br />
								笼位类别：{{  scope.row.H.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.H.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.H.project_id + '-' + scope.row.H.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.H.shelf_id.split('-')[0] +
												scope.row.H.shelf_id.split('-')[1] + '-' + scope.row.H.x_axis +
												scope.row.H.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.H.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.H.dtcd.details.测试药品 + '-' +
											scope.row.H.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.H.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.H.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.H.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.H.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.H.project_id + '-' + scope.row.H.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.H.shelf_id.split('-')[0] +
												scope.row.H.shelf_id.split('-')[1] + '-' + scope.row.H.x_axis +
												scope.row.H.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.H.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.H.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.H.project_id + '-' + scope.row.H.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.H.shelf_id.split('-')[0] +
												scope.row.H.shelf_id.split('-')[1] + '-' + scope.row.H.x_axis +
												scope.row.H.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.H.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.H.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.H.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.H.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.H.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.H.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="I" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.I.type === '实验笼' || scope.row.I.type === '繁殖笼' || scope.row.I.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.I.created  }}<br />
								联系方式：{{  scope.row.I.id  }}<br />
								笼位类别：{{  scope.row.I.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.I.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.I.project_id + '-' + scope.row.I.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.I.shelf_id.split('-')[0] +
												scope.row.I.shelf_id.split('-')[1] + '-' + scope.row.I.x_axis +
												scope.row.I.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.I.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.I.dtcd.details.测试药品 + '-' +
											scope.row.I.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.A.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.A.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.A.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.I.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.I.project_id + '-' + scope.row.I.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.I.shelf_id.split('-')[0] +
												scope.row.I.shelf_id.split('-')[1] + '-' + scope.row.I.x_axis +
												scope.row.I.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.I.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.I.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.I.project_id + '-' + scope.row.I.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.I.shelf_id.split('-')[0] +
												scope.row.I.shelf_id.split('-')[1] + '-' + scope.row.I.x_axis +
												scope.row.I.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.I.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.I.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.I.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.I.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.I.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.I.task_id  }}
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div style="margin-top: 2%;">
			<el-button type="primary" style="margin-left: 6%;" @click="goexpmouse">实验用鼠</el-button>
			<el-button type="primary" style="margin-left: 6%;" @click="gocageentry">笼位录入</el-button>
			<el-button type="primary" style="margin-left: 6%;" @click="gomatingtask" >交配任务</el-button>
			<el-button type="primary" style="margin-left: 6%;" disabled>转移任务</el-button>
			<el-button type="primary" style="margin-left: 6%;" disabled>意外死亡</el-button>
			<el-button type="primary" style="margin-left: 6%;" disabled>淘汰</el-button>
			<el-button type="primary" style="margin-left: 6%;" disabled>淘汰任务</el-button>
		</div>
		<el-dialog title="其他笼设置" :visible.sync="dialogFormVisible">
			<el-select v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.label">
				</el-option>
			</el-select>
			<el-select v-model="value1" placeholder="请选择" v-if="value === '设置为功能笼'" style="margin-left: 10%;">
				<el-option v-for="item in options1" :key="item.label" :label="item.label" :value="item.label">
				</el-option>
			</el-select>
			<el-select v-model="value2" placeholder="请选择" v-if="value === '设置为实验笼'" style="margin-left: 10%;">
				<el-option v-for="item in nocagedata" :key="item.id" :label="item.task_id" :value="item">
				</el-option>
			</el-select>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="changecagename">确 定</el-button>
			</div>
		</el-dialog>
	</div>


</template>
<script>

import headTop from '../components/headTop.vue'
import { postcagetype, getcagelist, postnewcageandexp, getunsetcage, getcagetype } from '../api/data.js'

export default {
	data() {
		return {
			cages: this.$route.query,
			tableData: [{
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {
					'task_id': '饲养料'
				},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {
					'task_id': '笼卡'
				},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {
					'task_id': '测试笼'
				},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}],
			lastsignalindex: 0,
			lastsignalcol: '',
			house: '',
			shelf: '',
			wall: '',
			dialogFormVisible: false,
			options: [{
				label: '设置为功能笼'
			}, {
				label: '设置为实验笼'
			}],
			options1: [{
				label: '测试笼'
			}, {
				label: '笼卡'
			}, {
				label: '饲养料'
			}],
			value: '',
			value1: '',
			value2: '',
			nocagedata: [],
		}
	},
	created() {
		if (this.$route.meta.length < 2) {
			// console.log(this.$route.meta.length)
			this.$route.meta.push(this.cages.name)
		}
	},
	activated() {
		const obj = document.getElementsByClassName("el-table--enable-row-hover")[0];
		let clz = obj.getAttribute("class");
		clz = clz.replace("el-table--enable-row-hover", "")
		obj.setAttribute("class", clz)
	},
	mounted() {
		this.gettablist()
		// getcagetype('drugtest')
	},
	components: {
		headTop
	},
	methods: {
		gettablist() {
			// 获取当前拥有的笼子信息，包括了已分配位置的和未分配位置的
			getcagelist().then((res) => {
				//这里需要对tableData进行初始化(虽然它没用push方法), 但因为不同笼架是用同一个组件的  所以当我从 1号位A架J面 点击到 1好位B架A面 时，数据不会进行初始化(类似于hover样式那个机制)
				this.tableData = [{
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {
						'task_id': '饲养料'
					},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {
						'task_id': '笼卡'
					},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {
						'task_id': '测试笼'
					},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}]
				for (var i in res.data.data) {
					//这里的判断条件是我这个数据的y_axis存在，存在就表明这个笼子是有位置的，所有else里的就是没有位置的笼子
					if (res.data.data[i]['y_axis']) {
						//把位置的笼子的数据放到对应的数据位置，这里面的 this.$route.meta[1]就是 '1号房A架J面'  然后res.data.data[i].wall_id就是 '1-A-J'
						//这里我已经做了对货架的判断 还不够全面
						if (this.$route.meta[1].split('号房')[1].split('架')[0] === res.data.data[i].wall_id.split('-')[1] && this.$route.meta[1].split('号房')[0] === res.data.data[i].wall_id.split('-')[0] && this.$route.meta[1].split('号房')[1].split('架')[1][0] === res.data.data[i].wall_id.split('-')[2]) {
							// 修改成前端展示需要的中午而不是展示英文
							if (res.data.data[i].type === 'drugtest') {
								res.data.data[i].type = '实验笼'
								res.data.data[i].mice = []
								for (var j in res.data.data[i].dtcd.m_info) {
									res.data.data[i].mice.push(res.data.data[i].dtcd.m_info[j].id)
								}
							}
							if (res.data.data[i].type === 'feed') {
								res.data.data[i].type = '饲养笼'
								res.data.data[i].mice = []
								for (var j in res.data.data[i].fcd.m_info) {
									res.data.data[i].mice.push(res.data.data[i].fcd.m_info[j].id)
								}
							}
							if (res.data.data[i].type === 'coitus') {
								res.data.data[i].type = '繁殖笼'
								res.data.data[i].mice = []
								// for (var j in res.data.data[i].dtcd.m_info){
								// 	res.data.data[i].mice.push(res.data.data[i].dtcd.m_info[j].id)
								// }
							}
							res.data.data[i].created = res.data.data[i].created.split('T')[0]
							// 因为这里的数据顺序是从0开始的，而后端的'y_axis'字段是正常的 1 2 3这种  所以要-1
							this.tableData[parseInt(res.data.data[i]['y_axis'] - 1)][res.data.data[i]['x_axis']] = res.data.data[i]
						}
					}
					//  else {
					// 	//进到这里的数据就是没有确定位置的笼子，就直接把它push到nocagedata里去， 
					// 	//因为是push的原因  所以每次调用这个函数的时候需要对nocagedata进行初始化一下，不然弄nocagedata每调用一次接口就会放一次数据
					// 	this.nocagedata.push(res.data.data[i])
					// }
				}
			})
		},
		getunsetcagedata() {
			//先直接调用，看看返回的数据结构是怎么样子的，这里只是定义了方法 需要去mounted里去调用
			//获取到的数据结构[{id: "c6e33e21-d297-4e69-b0a7-f955f9380873", creator_id: "", created: "2022-08-22T05:46:25.53Z",…}]
			//已经是个列表的形式了 那就直接用就可以了
			//上面的就可以删掉了
			//这边是直接赋值的，所以不需要对数据进行初始化
			//然后这个接口什么时候会用到呢？ 用户在点击其他笼子的时候
			//所以就是需要在用户单击其他笼子那里进行调用
			getunsetcage().then((res) => {
				if (res.code === 200) {
					this.nocagedata = res.data.data
				}
			})
		},
		gocage(row, column) {
			if (row[column.label].type === '饲养笼') {
				this.$router.push({ path: '/feedingcage', query: { data: row[column.label] } })
			} else if (row[column.label].type === '实验笼') {
				this.$router.push({ path: '/experimentcage', query: { data: row[column.label] } })
			} else if (row[column.label].type === '繁殖笼') {
				this.$router.push({ path: '/breedingcage', query: { data: row[column.label] } })
			}
		},
		goshow(row, column) {
			//下面这个判断是对当前点击的笼子类型进行判断，如果是繁殖笼这些 就不会触发下面，只有空的笼子或者功能笼会触发
			if (row[column.label].type === undefined) {
				for (var i in this.tableData) {
					if (this.tableData[i] === row) {
						this.lastsignalindex = i
						this.lastsignalcol = column.label
						this.getunsetcagedata()
						this.dialogFormVisible = true
					}
				}
			}
		},
		changecagename() {
			if (this.value === '设置为功能笼') {
				this.tableData[this.lastsignalindex][this.lastsignalcol]['task_id'] = this.value1
				this.dialogFormVisible = false
			} else if (this.value === '设置为实验笼') {
				// postcagetype(this.value2)
				let house_id = this.$route.meta[1].split('号房')[0]
				let shelf_id = this.$route.meta[1].split('号房')[0] + '-' + this.$route.meta[1].split('号房')[1].split('架')[0]
				let wall_id = this.$route.meta[1].split('号房')[0] + '-' + this.$route.meta[1].split('号房')[1].split('架')[0] + '-' + this.$route.meta[1].split('号房')[1].split('架')[1][0]
				let postdata = {
					"house_id": house_id,
					"shelf_id": shelf_id,
					"wall_id": wall_id,
					"x_axis": this.lastsignalcol,
					"y_axis": (parseInt(this.lastsignalindex) + 1).toString(),
					"cage_details": this.value2.dtcd
				}
				// console.log(postdata)
				// let expid = '29f21ac0-5652-4619-9fe6-63c278a20e47'
				postnewcageandexp('drugtest', this.value2.id, postdata).then((res) => {
					if (res.code === 200) {
						this.gettablist()
						this.dialogFormVisible = false
					}
				})
			}
		},
		cellStyle({ row, column, rowIndex, columnIndex }) {
			let shiyanColor = false;
			let fanzhiColor = false;
			let qitaColor = false;
			let gongnengColor = false;
			Object.keys(row).forEach((key) => {
				if (row[key].type === '实验笼' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						shiyanColor = true;
					}
				} else if (row[key].type === '繁殖笼' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						fanzhiColor = true;
					}
				} else if (row[key].task_id === '测试笼' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						gongnengColor = true;
					}
				} else if (row[key].task_id === '饲养料' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						gongnengColor = true;
					}
				} else if (row[key].task_id === '笼卡' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						gongnengColor = true;
					}
				} else if (Object.keys(row[key]).length === 0 && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						qitaColor = true;
					}
				}
			});
			if (shiyanColor) {
				return "shiyan-row";
			}
			if (fanzhiColor) {
				return "fanzhi-row";
			}
			if (qitaColor) {
				return "qita-row";
			}
			if (gongnengColor) {
				return "gongneng-row";
			}
			return "";
		},
		gocageentry() {
			this.$router.push({ path: '/cageentry' })
		},
		goexpmouse() {
			this.$router.push({ path: '/expmouse' })
		},
		gomatingtask(){
			this.$router.push({ path: '/matingtask' })
		}
	},
	watch: {
		//所以我在这里对路由信息进行监听，发生变化的时候，就会重新调用一次获取笼位信息的函数，函数里对tableData进行初始化操作
		$route(to) {
			if (to.path === '/cageinfo') {
				this.cages = to.query
				this.$route.meta[1] = this.cages.name
				this.gettablist()
			}
		}
	}
}
</script>

<style lang="less" scoped>
@import '../style/mixin.less';

.header_container {
	position: absolute;
	top: 0;
}

.el-table {
	font-size: 12px;
	margin-top: 60px;
}

/deep/.el-table .fanzhi-row {
	background: #f7f7a8;
}

/deep/.el-table .shiyan-row {
	background: rgb(123, 209, 237);
}

/deep/.el-table .qita-row {
	background: rgb(223, 223, 223);
}

/deep/.el-table .gongneng-row {
	background: rgb(180, 180, 180);
}

.syTable {

	border-collapse: collapse;

	tr {
		background-color: rgb(123, 209, 237);
		border: 2px solid black;
		font-weight: 600;
		color: black;
		td{
			border:2px solid black;
		}
	}
}

.fzTable {

	border-collapse: collapse;

	tr {
		background-color: #f7f7a8;
		border: 2px solid black;
		font-weight: 600;
		color: black;
		td{
			border:2px solid black;
		}
	}
}

.siyangTable {

	border-collapse: collapse;

	tr {
		// background-color: #f7f7a8;
		border: 2px solid black;
		font-weight: 600;
		color: black;
		td{
			border:2px solid black;
		}
	}
}


</style>											<td colspan="1" rowspan="2">
												{{  scope.row.D.shelf_id.split('-')[0] +
												scope.row.D.shelf_id.split('-')[1] + '-' + scope.row.D.x_axis +
												scope.row.D.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.D.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.D.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.D.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.D.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.D.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.D.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="E" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.E.type === '实验笼' || scope.row.E.type === '繁殖笼' || scope.row.E.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.E.created  }}<br />
								笼位编号：{{  scope.row.E.id  }}<br />
								笼位类别：{{  scope.row.E.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.E.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.E.project_id + '-' + scope.row.E.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.E.shelf_id.split('-')[0] +
												scope.row.E.shelf_id.split('-')[1] + '-' + scope.row.E.x_axis +
												scope.row.E.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.E.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.E.dtcd.details.测试药品 + '-' +
											scope.row.E.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.E.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.E.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.E.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.E.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.E.project_id + '-' + scope.row.E.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.E.shelf_id.split('-')[0] +
												scope.row.E.shelf_id.split('-')[1] + '-' + scope.row.E.x_axis +
												scope.row.E.y_axis


												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.E.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.E.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.E.project_id + '-' + scope.row.E.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.E.shelf_id.split('-')[0] +
												scope.row.E.shelf_id.split('-')[1] + '-' + scope.row.E.x_axis +
												scope.row.E.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.E.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.E.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.E.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.E.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.E.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.E.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="F" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.F.type === '实验笼' || scope.row.F.type === '繁殖笼' || scope.row.F.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.F.created  }}<br />
								笼位编号：{{  scope.row.F.id  }}<br />
								笼位类别：{{  scope.row.F.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.F.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.F.project_id + '-' + scope.row.F.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.F.shelf_id.split('-')[0] +
												scope.row.F.shelf_id.split('-')[1] + '-' + scope.row.F.x_axis +
												scope.row.F.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.F.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.F.dtcd.details.测试药品 + '-' +
											scope.row.F.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.F.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.F.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.F.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.F.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.F.project_id + '-' + scope.row.F.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.F.shelf_id.split('-')[0] +
												scope.row.F.shelf_id.split('-')[1] + '-' + scope.row.F.x_axis +
												scope.row.F.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.F.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.F.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.F.project_id + '-' + scope.row.C.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.F.shelf_id.split('-')[0] +
												scope.row.F.shelf_id.split('-')[1] + '-' + scope.row.F.x_axis +
												scope.row.F.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.F.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.F.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.F.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.F.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.F.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.F.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="G" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.G.type === '实验笼' || scope.row.G.type === '繁殖笼' || scope.row.G.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.G.created  }}<br />
								笼位编号：{{  scope.row.G.id  }}<br />
								笼位类别：{{  scope.row.G.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.G.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.G.project_id + '-' + scope.row.G.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.G.shelf_id.split('-')[0] +
												scope.row.G.shelf_id.split('-')[1] + '-' + scope.row.G.x_axis +
												scope.row.G.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.G.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.G.dtcd.details.测试药品 + '-' +
											scope.row.G.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.G.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.G.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.G.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.G.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.G.project_id + '-' + scope.row.G.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.G.shelf_id.split('-')[0] +
												scope.row.G.shelf_id.split('-')[1] + '-' + scope.row.G.x_axis +
												scope.row.G.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.G.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.G.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.G.project_id + '-' + scope.row.G.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.G.shelf_id.split('-')[0] +
												scope.row.G.shelf_id.split('-')[1] + '-' + scope.row.G.x_axis +
												scope.row.G.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.G.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.G.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.G.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.G.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.G.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.G.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="H" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.H.type === '实验笼' || scope.row.H.type === '繁殖笼' || scope.row.H.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.H.created  }}<br />
								笼位编号：{{  scope.row.H.id  }}<br />
								笼位类别：{{  scope.row.H.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.H.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.H.project_id + '-' + scope.row.H.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.H.shelf_id.split('-')[0] +
												scope.row.H.shelf_id.split('-')[1] + '-' + scope.row.H.x_axis +
												scope.row.H.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.H.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.H.dtcd.details.测试药品 + '-' +
											scope.row.H.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.H.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.H.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.H.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.H.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.H.project_id + '-' + scope.row.H.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.H.shelf_id.split('-')[0] +
												scope.row.H.shelf_id.split('-')[1] + '-' + scope.row.H.x_axis +
												scope.row.H.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.H.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.H.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.H.project_id + '-' + scope.row.H.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.H.shelf_id.split('-')[0] +
												scope.row.H.shelf_id.split('-')[1] + '-' + scope.row.H.x_axis +
												scope.row.H.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.H.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.H.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.H.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.H.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.H.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.H.task_id  }}
						</div>
					</template>
				</el-table-column>
				<el-table-column label="I" align="center">
					<template slot-scope="scope">
						<el-tooltip placement="top"
							v-if="scope.row.I.type === '实验笼' || scope.row.I.type === '繁殖笼' || scope.row.I.type === '饲养笼'">
							<div slot="content">
								创建时间：{{  scope.row.I.created  }}<br />
								联系方式：{{  scope.row.I.id  }}<br />
								笼位类别：{{  scope.row.I.type  }}
							</div>
							<div>
								<!-- 实验笼 -->
								<table class="syTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.I.type === '实验笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.I.project_id + '-' + scope.row.I.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.I.shelf_id.split('-')[0] +
												scope.row.I.shelf_id.split('-')[1] + '-' + scope.row.I.x_axis +
												scope.row.I.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.I.dtcd.group  }}</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.I.dtcd.details.测试药品 + '-' +
											scope.row.I.dtcd.details.药物浓度
												}}
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1" v-if="scope.row.A.dtcd.gender === 'M'">
												<span style="color:rgb(5, 38, 250)" v-for="id in scope.row.A.mice">
													{{  id  }}
												</span>
											</td>
											<td colspan="2" rowspan="1" v-else>
												<span style="color:red" v-for="id in scope.row.A.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- 繁殖笼 -->
								<table class="fzTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.I.type === '繁殖笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.I.project_id + '-' + scope.row.I.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.I.shelf_id.split('-')[0] +
												scope.row.I.shelf_id.split('-')[1] + '-' + scope.row.I.x_axis +
												scope.row.I.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1">{{  scope.row.I.created  }}</td>
										</tr>
									</tbody>
								</table>
								<!-- 饲养笼 -->
								<table class="siyangTable" border="1" width="100%" align="center"
									@dblclick="gocage(scope.row, scope.column)" v-if="scope.row.I.type === '饲养笼'">
									<tbody>
										<tr>
											<td colspan="1" rowspan="1">
												{{  scope.row.I.project_id + '-' + scope.row.I.task_id  }}
											</td>
											<td colspan="1" rowspan="2">
												{{  scope.row.I.shelf_id.split('-')[0] +
												scope.row.I.shelf_id.split('-')[1] + '-' + scope.row.I.x_axis +
												scope.row.I.y_axis
												}}
											</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="1" v-if="scope.row.I.fcd.gender === 'M'">
												<span style="color:blue">
													{{  scope.row.I.fcd.gender  }}
												</span>
											</td>
											<td colspan="1" rowspan="1" v-else>
												<span style="color:red">
													{{  scope.row.I.fcd.gender  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">
												<span v-for="id in scope.row.I.mice">
													{{  id  }}
												</span>
											</td>
										</tr>
										<tr>
											<td colspan="2" rowspan="1">{{  scope.row.I.fcd.dob.split('T')[0]  }}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-tooltip>
						<div v-else>
							{{  scope.row.I.task_id  }}
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div style="margin-top: 2%;">
			<el-button type="primary" style="margin-left: 6%;" @click="goexpmouse">实验用鼠</el-button>
			<el-button type="primary" style="margin-left: 6%;" @click="gocageentry">笼位录入</el-button>
			<el-button type="primary" style="margin-left: 6%;" @click="gomatingtask" >交配任务</el-button>
			<el-button type="primary" style="margin-left: 6%;" disabled>转移任务</el-button>
			<el-button type="primary" style="margin-left: 6%;" disabled>意外死亡</el-button>
			<el-button type="primary" style="margin-left: 6%;" disabled>淘汰</el-button>
			<el-button type="primary" style="margin-left: 6%;" disabled>淘汰任务</el-button>
		</div>
		<el-dialog title="其他笼设置" :visible.sync="dialogFormVisible">
			<el-select v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.label" :label="item.label" :value="item.label">
				</el-option>
			</el-select>
			<el-select v-model="value1" placeholder="请选择" v-if="value === '设置为功能笼'" style="margin-left: 10%;">
				<el-option v-for="item in options1" :key="item.label" :label="item.label" :value="item.label">
				</el-option>
			</el-select>
			<el-select v-model="value2" placeholder="请选择" v-if="value === '设置为实验笼'" style="margin-left: 10%;">
				<el-option v-for="item in nocagedata" :key="item.id" :label="item.task_id" :value="item">
				</el-option>
			</el-select>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="changecagename">确 定</el-button>
			</div>
		</el-dialog>
	</div>


</template>
<script>

import headTop from '../components/headTop.vue'
import { postcagetype, getcagelist, postnewcageandexp, getunsetcage, getcagetype } from '../api/data.js'

export default {
	data() {
		return {
			cages: this.$route.query,
			tableData: [{
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {
					'task_id': '饲养料'
				},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {
					'task_id': '笼卡'
				},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {
					'task_id': '测试笼'
				},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}, {
				A: {},
				B: {},
				C: {},
				D: {},
				E: {},
				F: {},
				G: {},
				H: {},
				I: {},
			}],
			lastsignalindex: 0,
			lastsignalcol: '',
			house: '',
			shelf: '',
			wall: '',
			dialogFormVisible: false,
			options: [{
				label: '设置为功能笼'
			}, {
				label: '设置为实验笼'
			}],
			options1: [{
				label: '测试笼'
			}, {
				label: '笼卡'
			}, {
				label: '饲养料'
			}],
			value: '',
			value1: '',
			value2: '',
			nocagedata: [],
		}
	},
	created() {
		if (this.$route.meta.length < 2) {
			// console.log(this.$route.meta.length)
			this.$route.meta.push(this.cages.name)
		}
	},
	activated() {
		const obj = document.getElementsByClassName("el-table--enable-row-hover")[0];
		let clz = obj.getAttribute("class");
		clz = clz.replace("el-table--enable-row-hover", "")
		obj.setAttribute("class", clz)
	},
	mounted() {
		this.gettablist()
		// getcagetype('drugtest')
	},
	components: {
		headTop
	},
	methods: {
		gettablist() {
			// 获取当前拥有的笼子信息，包括了已分配位置的和未分配位置的
			getcagelist().then((res) => {
				//这里需要对tableData进行初始化(虽然它没用push方法), 但因为不同笼架是用同一个组件的  所以当我从 1号位A架J面 点击到 1好位B架A面 时，数据不会进行初始化(类似于hover样式那个机制)
				this.tableData = [{
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {
						'task_id': '饲养料'
					},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {
						'task_id': '笼卡'
					},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {
						'task_id': '测试笼'
					},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}, {
					A: {},
					B: {},
					C: {},
					D: {},
					E: {},
					F: {},
					G: {},
					H: {},
					I: {},
				}]
				for (var i in res.data.data) {
					//这里的判断条件是我这个数据的y_axis存在，存在就表明这个笼子是有位置的，所有else里的就是没有位置的笼子
					if (res.data.data[i]['y_axis']) {
						//把位置的笼子的数据放到对应的数据位置，这里面的 this.$route.meta[1]就是 '1号房A架J面'  然后res.data.data[i].wall_id就是 '1-A-J'
						//这里我已经做了对货架的判断 还不够全面
						if (this.$route.meta[1].split('号房')[1].split('架')[0] === res.data.data[i].wall_id.split('-')[1] && this.$route.meta[1].split('号房')[0] === res.data.data[i].wall_id.split('-')[0] && this.$route.meta[1].split('号房')[1].split('架')[1][0] === res.data.data[i].wall_id.split('-')[2]) {
							// 修改成前端展示需要的中午而不是展示英文
							if (res.data.data[i].type === 'drugtest') {
								res.data.data[i].type = '实验笼'
								res.data.data[i].mice = []
								for (var j in res.data.data[i].dtcd.m_info) {
									res.data.data[i].mice.push(res.data.data[i].dtcd.m_info[j].id)
								}
							}
							if (res.data.data[i].type === 'feed') {
								res.data.data[i].type = '饲养笼'
								res.data.data[i].mice = []
								for (var j in res.data.data[i].fcd.m_info) {
									res.data.data[i].mice.push(res.data.data[i].fcd.m_info[j].id)
								}
							}
							if (res.data.data[i].type === 'coitus') {
								res.data.data[i].type = '繁殖笼'
								res.data.data[i].mice = []
								// for (var j in res.data.data[i].dtcd.m_info){
								// 	res.data.data[i].mice.push(res.data.data[i].dtcd.m_info[j].id)
								// }
							}
							res.data.data[i].created = res.data.data[i].created.split('T')[0]
							// 因为这里的数据顺序是从0开始的，而后端的'y_axis'字段是正常的 1 2 3这种  所以要-1
							this.tableData[parseInt(res.data.data[i]['y_axis'] - 1)][res.data.data[i]['x_axis']] = res.data.data[i]
						}
					}
					//  else {
					// 	//进到这里的数据就是没有确定位置的笼子，就直接把它push到nocagedata里去， 
					// 	//因为是push的原因  所以每次调用这个函数的时候需要对nocagedata进行初始化一下，不然弄nocagedata每调用一次接口就会放一次数据
					// 	this.nocagedata.push(res.data.data[i])
					// }
				}
			})
		},
		getunsetcagedata() {
			//先直接调用，看看返回的数据结构是怎么样子的，这里只是定义了方法 需要去mounted里去调用
			//获取到的数据结构[{id: "c6e33e21-d297-4e69-b0a7-f955f9380873", creator_id: "", created: "2022-08-22T05:46:25.53Z",…}]
			//已经是个列表的形式了 那就直接用就可以了
			//上面的就可以删掉了
			//这边是直接赋值的，所以不需要对数据进行初始化
			//然后这个接口什么时候会用到呢？ 用户在点击其他笼子的时候
			//所以就是需要在用户单击其他笼子那里进行调用
			getunsetcage().then((res) => {
				if (res.code === 200) {
					this.nocagedata = res.data.data
				}
			})
		},
		gocage(row, column) {
			if (row[column.label].type === '饲养笼') {
				this.$router.push({ path: '/feedingcage', query: { data: row[column.label] } })
			} else if (row[column.label].type === '实验笼') {
				this.$router.push({ path: '/experimentcage', query: { data: row[column.label] } })
			} else if (row[column.label].type === '繁殖笼') {
				this.$router.push({ path: '/breedingcage', query: { data: row[column.label] } })
			}
		},
		goshow(row, column) {
			//下面这个判断是对当前点击的笼子类型进行判断，如果是繁殖笼这些 就不会触发下面，只有空的笼子或者功能笼会触发
			if (row[column.label].type === undefined) {
				for (var i in this.tableData) {
					if (this.tableData[i] === row) {
						this.lastsignalindex = i
						this.lastsignalcol = column.label
						this.getunsetcagedata()
						this.dialogFormVisible = true
					}
				}
			}
		},
		changecagename() {
			if (this.value === '设置为功能笼') {
				this.tableData[this.lastsignalindex][this.lastsignalcol]['task_id'] = this.value1
				this.dialogFormVisible = false
			} else if (this.value === '设置为实验笼') {
				// postcagetype(this.value2)
				let house_id = this.$route.meta[1].split('号房')[0]
				let shelf_id = this.$route.meta[1].split('号房')[0] + '-' + this.$route.meta[1].split('号房')[1].split('架')[0]
				let wall_id = this.$route.meta[1].split('号房')[0] + '-' + this.$route.meta[1].split('号房')[1].split('架')[0] + '-' + this.$route.meta[1].split('号房')[1].split('架')[1][0]
				let postdata = {
					"house_id": house_id,
					"shelf_id": shelf_id,
					"wall_id": wall_id,
					"x_axis": this.lastsignalcol,
					"y_axis": (parseInt(this.lastsignalindex) + 1).toString(),
					"cage_details": this.value2.dtcd
				}
				// console.log(postdata)
				// let expid = '29f21ac0-5652-4619-9fe6-63c278a20e47'
				postnewcageandexp('drugtest', this.value2.id, postdata).then((res) => {
					if (res.code === 200) {
						this.gettablist()
						this.dialogFormVisible = false
					}
				})
			}
		},
		cellStyle({ row, column, rowIndex, columnIndex }) {
			let shiyanColor = false;
			let fanzhiColor = false;
			let qitaColor = false;
			let gongnengColor = false;
			Object.keys(row).forEach((key) => {
				if (row[key].type === '实验笼' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						shiyanColor = true;
					}
				} else if (row[key].type === '繁殖笼' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						fanzhiColor = true;
					}
				} else if (row[key].task_id === '测试笼' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						gongnengColor = true;
					}
				} else if (row[key].task_id === '饲养料' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						gongnengColor = true;
					}
				} else if (row[key].task_id === '笼卡' && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						gongnengColor = true;
					}
				} else if (Object.keys(row[key]).length === 0 && key === column.label) {
					if (rowIndex === rowIndex && columnIndex === columnIndex) {
						qitaColor = true;
					}
				}
			});
			if (shiyanColor) {
				return "shiyan-row";
			}
			if (fanzhiColor) {
				return "fanzhi-row";
			}
			if (qitaColor) {
				return "qita-row";
			}
			if (gongnengColor) {
				return "gongneng-row";
			}
			return "";
		},
		gocageentry() {
			this.$router.push({ path: '/cageentry' })
		},
		goexpmouse() {
			this.$router.push({ path: '/expmouse' })
		},
		gomatingtask(){
			this.$router.push({ path: '/matingtask' })
		}
	},
	watch: {
		//所以我在这里对路由信息进行监听，发生变化的时候，就会重新调用一次获取笼位信息的函数，函数里对tableData进行初始化操作
		$route(to) {
			if (to.path === '/cageinfo') {
				this.cages = to.query
				this.$route.meta[1] = this.cages.name
				this.gettablist()
			}
		}
	}
}
</script>

<style lang="less" scoped>
@import '../style/mixin.less';

.header_container {
	position: absolute;
	top: 0;
}

.el-table {
	font-size: 12px;
	margin-top: 60px;
}

/deep/.el-table .fanzhi-row {
	background: #f7f7a8;
}

/deep/.el-table .shiyan-row {
	background: rgb(123, 209, 237);
}

/deep/.el-table .qita-row {
	background: rgb(223, 223, 223);
}

/deep/.el-table .gongneng-row {
	background: rgb(180, 180, 180);
}

.syTable {

	border-collapse: collapse;

	tr {
		background-color: rgb(123, 209, 237);
		border: 2px solid black;
		font-weight: 600;
		color: black;
		td{
			border:2px solid black;
		}
	}
}

.fzTable {

	border-collapse: collapse;

	tr {
		background-color: #f7f7a8;
		border: 2px solid black;
		font-weight: 600;
		color: black;
		td{
			border:2px solid black;
		}
	}
}

.siyangTable {

	border-collapse: collapse;

	tr {
		// background-color: #f7f7a8;
		border: 2px solid black;
		font-weight: 600;
		color: black;
		td{
			border:2px solid black;
		}
	}
}


</style>