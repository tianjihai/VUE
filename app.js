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
        height:175,
        site:"https://www.baidu.com",
        num:23,
        x:0,
        y:0,
    },
    methods:{
       greet:function (nm) {
           return "hello"+nm;
       },
       add:function () {
           return this.num+=10;
       },
        des:function () {
            return this.num-=10;
        },
        zuobiao:function (event) {
            this.x=event.offsetX;
            this.y=event.offsetY;
        }
    }
});

