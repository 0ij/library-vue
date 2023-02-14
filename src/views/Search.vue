<template>
    <el-container>
        <el-header class="header-form">
            <h1>网上书店搜索界面</h1>
        </el-header>
        <el-main>
            <MyNav></MyNav>
            <el-container :model="searchForm" class="search-form">
                <div style="display: flex;flex-direction: column ">
                  <el-input placeholder="书名" type="text" v-model="searchForm.bname"></el-input>
                  <el-input  style="padding-top: 10px" placeholder="作者" type="text" v-model="searchForm.author"></el-input>
                  <el-input  style="padding-top: 10px" placeholder="IBSN" type="text" v-model="searchForm.ISBN"></el-input>
                </div>
                <el-button icon="el-icon-search" @click="onSearch('searchForm')"></el-button>
            </el-container>
        </el-main>
    </el-container>
</template>

<script>
import MyNav from "../components/MyNav";
import store from "../store";
import router from "../router";
export default {
    name:'Search',
  components:{
    MyNav
  },
    data(){
        return{
            searchForm:{
              bname:'',
              author:'',
              ISBN:''
            }
        }
    },
    methods:{
      onSearch(searchForm){
        if(this.searchForm.author===''&&this.searchForm.bname===''&&this.searchForm.ISBN===''){
          alert("搜索关键词不能全为空！")
        }else{
          var url=this.$baseUrl+'/book/search';
         // console.log(this.searchForm)
          this.$axios.post(url,{
            bname:this.searchForm.bname,
            author:this.searchForm.author,
            ISBN:this.searchForm.ISBN
          }).then(res=>{
            console.log(res.data);
            store.commit("getSearchResult",res.data.books);
            router.push("/searchBook")
          },err=>{
            console.log(err);
          })
        }

      }
    }
}
</script>

<style scoped>
.header-form {
    margin-top: 20px;
}
.el-input {
    width: 600px;
}
.search-form {
  margin-top: 10%;
  margin-left: 20%;
}
</style>
