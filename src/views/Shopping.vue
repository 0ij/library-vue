<template>
    <el-container>
        <el-header class="header-form">
            <h1>我的购物车</h1>
        </el-header>
        <el-main>
           <MyNav></MyNav>
            <div style="margin-top: 20px;">
                <el-table
					:data="tableData"
					style="width: 100%">
						<el-table-column
							prop="title"
							label="书名"
							min-width="7%" align="center">
						</el-table-column>
						<el-table-column
							prop="price"
							label="价格"
							min-width="7%" align="center">
						</el-table-column>
						<el-table-column
						label="数量" min-width="5%" align="center">
						<template slot-scope="scope">
							<el-input min="1" type="number" v-model="scope.row.num" ></el-input>
						</template>
						</el-table-column>
						<el-table-column label="操作" min-width="10%" align="center">
							<template slot-scope="scope">
								<el-button size="small" @click="del(scope.$index)">删除</el-button>
							</template>
						</el-table-column>
				</el-table>
            </div>
            <div style="margin-top: 30px;">
                <el-button type="primary" plain>结账</el-button>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import MyNav from "../components/MyNav";

export default {
    name:'Shopping',
  components:{
    MyNav
  },
    data(){
        return{
            tableData:[
                {
                    title:'三体',
                    price:'30',
                    num:1
                }
            ]
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.header-form {
    margin-top: 20px;
}
</style>
