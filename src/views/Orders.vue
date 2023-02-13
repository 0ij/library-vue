<template>
  <body>
  <MyNav></MyNav>
  <el-table :data="orders"  stripe style="width: 100%; cursor: pointer;border-radius: 25px; " :show-header='false' >
    <el-table-column  label="订单" >
      <template slot-scope="scope" >
        <div @click="moreInfo(scope.row)" >
          <img :src="scope.row.img[0]" style="margin-top: 8px;border-radius: 8px;width:450px;height:260px"></img>
          <span class="span" style="text-align: center; position:absolute; margin-top: 35px;margin-left: 50px;font-size: 30px;font-family: SimSun;font-weight: bold"  >{{scope.row.bid}}</span>
          <span class="span1" style="text-align: center; position:absolute; margin-top: 120px;margin-left: 120px;font-size: 20px "  >{{scope.row.type}}</span>
          <span v-if="scope.row.joint=='true'" class="span1" style="text-align: center; position:absolute; margin-top: 120px;margin-left: 350px;font-size: 20px " >合租</span>
          <span v-if="scope.row.joint=='false'" class="span1" style="text-align: center; position:absolute; margin-top: 120px;margin-left: 350px;font-size: 20px " >独租</span>
          <span class="span1" style="text-align: center; position:absolute; margin-top: 200px;margin-left: 120px;font-size: 20px "  >{{scope.row.district}}</span>
          <span class="span1" style="text-align: center; position:absolute; margin-top: 200px;margin-left: 350px;font-size: 20px "  >{{scope.row.neighborhood}}</span>
          <span class="span1" style="text-align: center; position:absolute; margin-top: 150px;margin-left: 600px;font-size: 45px;color: #e5121f;font-weight: bold;"  >{{scope.row.cost}}<span style="font-size: 25px;color: #e5121f;font-weight: bold; ">元/月</span></span>
          <!--
                      <span class="span1" style="text-align: center; position:absolute; margin-top: 154px;margin-left: 711px;font-size: 25px;color: #e5121f;font-weight: bold; "  ></span>
          -->
        </div>
      </template>
    </el-table-column>
  </el-table>
  </body>
</template>

<script>
import MyNav from "../components/MyNav";
import store from "../store";
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
