<template>
  <body>
  <MyNav></MyNav>
<!--  界面显示订单内容-->
  <el-table
    :data="orders"
    style="width: 100%">
    <el-table-column
      prop="bid"
      label="书名"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column
      prop="totalPrice"
      label="价格"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column
      label="数量" min-width="5%" align="center">
      <template slot-scope="scope">
        <el-input min="1" type="number" v-model="scope.row.bnumber" ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="10%" align="center">
      <template slot-scope="scope">
        <el-button size="small" @click="del(scope.$index)">付款</el-button>
      </template>
    </el-table-column>
  </el-table>
  </body>
</template>

<script>
import MyNav from "../components/MyNav";
import store from "../store";
import Element from "element-ui";
export default {
  name: "order",
  components:{
    MyNav
  },
  data(){
    return{
      orders:[{
        oid:'1',
        orderTime:'2021-10-19',
        state:'1',
        uid:'12',
        bid:'3',
        bnumber:'34',
        totalPrice:'333'
      }],
    }

  },methods:{

  },
  created() {
    var url=this.$baseUrl+'/orders';
    this.$axios.get(url,{
      params: {
        uid:store.state.user.id
      }
    }).then(res=>{
      store.commit('setOrders',res.data.orders)
      console.log(res.data);
    },err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>

</style>
