import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建一个store
export default new Vuex.Store({
  // 设置全局访问的state对象
  state: {
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
    searchBookResult:[{
      bid:'41',
      bname:'三体',
      author:'刘慈欣',
      ISBN:'901274918',
      pic:'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
      price:'330',
      putTime:'2019-10-9',
      number:'2000',
      abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
    }],
    //被查看详情的那本书
    book:{
      pic: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
      ISBN:'12121',
      bname: 'store里被选中的三体',
      author: '刘慈欣',
      price: '30',
      abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'

    },
    //当前用户的所有订单
    orders:[{oid:'store190876',
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
    //当前用户的购物车
    cart:[{
      oid:'',
      orderTime:'',
      state:'',
      uid:'',
      bid:'',
      bnumber:'',
      totalPrice:''
    }]
  },
  // 修改状态
  mutations: {
    setName(state,data) {
      state.user.name=data;
    },
    setEmail(state,email){
      state.user.mail=email;
    },
    setPassword(state,password){
      state.user.password=password;
    },
    login(state,data){
      this.setName(state,data.name);
      this.setEmail(state,data.email);
      this.setPassword(data.password);
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
      state.book.push(book);
    }
  }
})
