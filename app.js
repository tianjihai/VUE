//实例化vue对象

/*
el:element 需要获取的元素，一定是html的根容器元素
data:用于数据存储
*/
new Vue({
   el:"#vue-app",
    data:{
       name:"田田",
        age:23,
        height:175
    },
    methods:{
       greet:function (nm) {
           return "hello"+nm;
       }
    }
});
