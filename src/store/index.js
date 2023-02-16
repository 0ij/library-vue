import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建一个store
// const store = new Vuex.Store({
//   state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
//     //id
//     skillId:'',
//     //技能状态
//     checkStatus:''
//   }
// })

// export default new Vuex.Store({
//   // 设置全局访问的state对象
//   state: {
export default new Vuex.Store({
  state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
    //用户的信息
    user:{
      uid:'',
      name:'',
      password:'',
      mail:''
    },
    //所有书籍
    bookList:[{
      bid:'',
      bname:'',
      author:'',
      ISBN:'',
      pic:'',
      price:'',
      putTime:'',
      number:''
    },{}],
    //热销书
    bookSaledGood:[{

    }],
    //新进书
    bookRecent:[{

    }],
    //搜索的结果
    searchBookResult:[],
    //被查看详情的那本书
    book:{
    },
    //当前用户的所有订单
    orders:[{oid:'store190876',
      orderTime:'2021-10-19',
      state:'未发货',
      uid:'12',
      bid:'5',
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
    //当前用户的购物车
    cart:[]
  },
  // 修改状态
  mutations: {
    setName(state,data) {
      state.user.name=data.uname;
    },
    setEmail(state,email){
      state.user.mail=email;
    },
    setPassword(state,password){
      state.user.password=password;
    },
    login(state,data){
      state.user.password=data.password;
      state.user.name=data.uname;
      state.user.mail=data.mail;
      state.user.uid=data.uid;
    },
    getSearchResult(state,data){
      state.searchBookResult=data;
    },
    setBook(state,data){
      state.book=data;
    },
    setOrders(state,orders){
      state.orders=orders;
      let i=0;
      for(i=0;i<state.orders.length;i++){
        if(state.orders[i].state===0){
          state.orders[i].state='未支付';
        }else if(state.orders[i].state===1){
          state.orders[i].state='已支付但未发货';
        }else if(state.orders[i].state===2){
          state.orders[i].state='已发货但未签收';
        }else if(state.orders[i].state===3){
          state.orders[i].state='已签收';
        }
      }
    },
    setBookSaledGood(state,data){
      state.bookSaledGood=data;
    },
    setBookRecent(state,data){
      state.bookRecent=data;
    },
    delOrder(state,oid){
      state.orders = state.orders.filter(function (item) {
        return item != oid;
      });
    },
    payOrder(state,oid){
      let i=0;
      for(i=0;i<state.orders.length;i++){
        if(state.orders[i].oid===oid){
          state.orders[i].state='已支付但未发货';
        }
      }
    },
    addIntoCart(state,book){
      console.log(book);
      state.cart.push(book);
      // state.cart.push(book);
      // let l=state.cart.length;
      // state.cart[l-1].num=num;
    }
  }
})
