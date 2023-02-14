import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建一个store
export default new Vuex.Store({
  // 设置全局访问的state对象
  state: {
    user:{
      name:'',
      password:'',
    },
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

      // cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
      // ISBN:'12121',
      // title: '三体',
      // author: '刘慈欣',
      // price: '30',
      // abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'

    }],
    book:{
      pic: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
      ISBN:'12121',
      bname: 'store里被选中的三体',
      author: '刘慈欣',
      price: '30',
      abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'

    },
    order:[{
      oid:'store1',
      orderTime:'2021-10-19',
      state:'1',
      uid:'12',
      bid:'3',
      bnumber:'34',
      totalPrice:'333'
    }],
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
    setPassword(state,password){
      state.user.password=password;
    },
    login(state,name){
      this.setName(state,name)
    },
    getSearchResult(state,data){
      state.searchBookResult=data;
    },
    setBook(state,date){
      state.book=data;
    },
    setOrders(state,orders){
      state.order=orders;
    }
  }
})
