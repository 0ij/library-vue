<template>
  <body>
  <MyNav></MyNav>
<!--  界面显示订单内容-->
  <el-table
    :data="orders"
    style="width: 100%">
    <el-table-column
      prop="oid"
      label="订单号"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column
      prop="bid"
      label="bid"
      min-width="7%" align="center">
    </el-table-column>
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
    <el-table-column
      prop="orderTime"
      label="下单时间"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column label="操作" min-width="10%" align="center">
      <template slot-scope="scope">
        <el-button size="small" @click="pay(scope.row.oid,scope.row.state)">支付</el-button>
        <el-button size="small" @click="del(scope.row.oid,scope.row.state)">撤除</el-button>
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
        oid:'190876',
        orderTime:'2021-10-19',
        state:'未发货',
        uid:'12',
        bid:'3',
        bnumber:'34',
        totalPrice:'333'
      },
        {oid:'213341',
          orderTime:'2021-10-19',
          state:'未支付',
          uid:'12',
          bid:'3',
          bnumber:'34',
          totalPrice:'333'
        }],
    }

  },methods:{
    load(){
      this.orders=store.state.orders;
    },
    //撤销订单
      del(oid,state){
        console.log(oid);
        if(state=='未支付'||state=='已支付未发货'){
          store.commit('delOrder',oid);
          this.load();
          this.$axios.post('/ord/deleteOrd',{
            oid:oid,
          }).then(response =>{
            if(response.data=="删除成功"){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }
          });
        }else{
          alert('此订单当前状态不允许撤销')
        }
      },
    //支付订单
    pay(oid,state){
      if(state=='未支付'){
        store.commit('payOrder',oid);
        this.load();
        this.$axios.post('/ord/changeOrd1',{
          oid:oid,
        }).then(response =>{
          console.log(response.data)
        });
      }else{
        alert('此订单已支付')
      }
    }
  },
  created() {
    var url=this.$baseUrl+'/ord/getOrds';
    this.$axios.get(url,{
      params: {
        uid:store.state.user.id
      }
    }).then(res=>{
      this.orders=res.data;
      store.commit('setOrders',res.data)
      console.log(res.data.message);
    },err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>

</style>
