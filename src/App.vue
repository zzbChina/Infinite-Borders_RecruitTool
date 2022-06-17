<template>
  <div id="app" >
    
    <Main/>
    <transition name='top_to_bottom_fade'>
    <div class="alert" v-show="alert.isShow">{{alert.msg}}!</div>
    </transition>

    <transition name='top_to_bottom_fade'>
    <div class="success" v-show="success.isShow">{{success.msg}}</div>
    </transition>

  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  data(){
    return{
        alert:{
           isShow : false,
           msg : ''
        },
        success:{
          isShow : false,
          msg : ''
        },
        isClick : false,
    }
  },
  methods: {
    alertPanel(info){
        this.alert.msg = info
        this.alert.isShow = true
        setTimeout(()=>{
          this.alert.isShow = false
        },1200)
    },
    successPanel(info){
      this.success.msg = info
      this.success.isShow = true
      setTimeout(()=>{
        this.success.isShow = false
      },1200)
    },
   
  },
  
  mounted() {
     //提示框的事件总线
     this.$bus.$on('alert',this.alertPanel)
     this.$bus.$on('success',this.successPanel)
  },
}
</script>

<style lang='less'>
#app {
    position: absolute; left: 0; top: 0;
    width: 100vw;
    height: 100vh;
    user-select: none;
    .main_bg_img{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 100vh;
        transition: all .3s;
    }
    .main_bg_img.leave{
        transform: scale(1.1);
    }
    .top_banner{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 15vh;
        background: linear-gradient(to bottom,rgb(0, 0, 0),rgba(255, 255, 255, 0));
        transition: all .2s;
        .logo{
            position: absolute; left: 5vw; top: 6vh;
            width: 28vw;
            height: 9vw;
            img{
                width: 100%;
                height: 1005;
            }
        }
        .select_season{
            position: absolute; right: 10vw; top: 6vh;
            font-size: 15px;
            color: white;
        }
    }
    .top_banner.leave{
        top: -15vh;
    }
    .click_animation{
      position: fixed;top: 0; left: 0;
      width: 46px;
      height: 46px;
      background:linear-gradient(to bottom right,rgba(255, 28, 28, 0.486),rgba(255, 220, 220, 0)); 
      border-radius: 50%;
      z-index: 10;
      animation: click_a .15s ease-out 1;
      // transition: all .15s;
    }
    .alert{
        position: absolute; top: 0; left: 50%;
        // margin: 0 0 0 -50%;
        transform: translateX(-50%);
        text-align: center;
        padding: 0 5vw;
        height: 5vw;
        line-height: 5vw;
        color: rgb(255, 255, 255);
        font-size: 1vw;
        font-weight: bold;
        z-index: 10;
        background: linear-gradient(to bottom,red,rgba(255, 0, 0, 0));
        transition: all .2s ease-out;
    }
    .success{
        position: absolute; top: 0; left: 50%;
        // margin: 0 0 0 -50%;
        transform: translateX(-50%);
        text-align: center;
        padding: 0 5vw;
        height: 5vw;
        line-height: 5vw;
        color: rgb(255, 255, 255);
        font-size: 1vw;
        font-weight: bold;
        z-index: 10;
        background: linear-gradient(to bottom,rgb(0, 255, 0),rgba(255, 0, 0, 0));
        transition: all .2s ease-out;
    }

    .bottom{
        position: absolute; bottom: -15vh; left: 0;
        width: 100vw;
        height: 15vh;
        transition: all .3s;
        .money{
            position: absolute; bottom: 5vw; left: 10vw;
            width: 30vw;
            height: 8vw;
            border-radius: 0 1vw 1vw 0;
            background: rgb(47, 47, 47);
            text-align: center;
            line-height: 8vw;
            font-size: 2vw;
            font-weight: bold;
            color:white;
            .money_icon{
                position: absolute; left: -5vw; top: 0;
                width: 8vw;
                height: 8vw;
                transform: scale(1.2);
            }
            .add_money_btn{
                position: absolute; right: -7vw; top: 0;
                width: 8vw;
                height: 8vw;
                background: rgb(255, 255, 255);
                color: rgb(47, 47, 47);
                line-height: 7vw;
                text-align: center;
                font-size: 3vw;
                border-radius: .2vw;
                box-sizing: border-box;
                border: .5vw solid rgb(47, 47, 47);
            }
        }
        .check_result{
            position: absolute; bottom: 5vw; left: 65vw;
            width: 25vw;
            height: 8vw;
            background: white;
            border: .5vw solid rgb(91, 91, 91);
            box-sizing: border-box;
            text-align: center;
            line-height: 7vw;
            font-size: 2vw;
            font-weight: bold;
            color:rgb(91, 91, 91);
            transition: all .15s;
        }
        .check_result.click{
            background: rgb(91, 91, 91);
            color: white;
        }
    }
    .bottom.leave{
        bottom: 0;
    }

    //武将卡
    .warrior_box{
        position: absolute; left: 0; top: 50vh;
        margin: -45vw 0 0 0;
        width: 100vw;
        height: 70vw;
        .warrior_card{
            position: absolute; left: 10vw; top: 0;
            width: 20vw;
            height: 30vw;
            background: #000;
            transition: all .5s ease-in;
            .warrior_img{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
            }
            .warrior_img_5{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0 0 10px rgb(160, 11, 170);
            }
            .warrior_img_4{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0 0 10px rgb(3, 72, 132);
            }
            .star_list{
               position: absolute; right: .7vw; top: .5vw;
               width: 13vw;
               height: 2.5vw;
               .star{
                  position: relative;
                  float: right;
                  width: 2.5vw;
                  height: 2.5vw;
                  img{
                     position: absolute; left: 0; top: 0;
                     width: 100%;
                     height: 100%;
                  }
               }
            }
        }
        .warrior_card:nth-of-type(1){
            left: 10vw;
            animation: card1 .3s ease-out 1;
        }
        .warrior_card:nth-of-type(2){
            left: 40vw;
            animation: card2 .33s ease-out 1;
        }
        .warrior_card:nth-of-type(3){
            left: 70vw;
            animation: card3 .36s ease-out 1;
        }
        .warrior_card:nth-of-type(4){
            left: 25vw;
            top: 40vw;
            animation: card4 .39s ease-out 1;
        }
        .warrior_card:nth-of-type(5){
            left: 55vw;
            top: 40vw;
            animation: card5 .42s ease-out 1;
        }
        @keyframes card1 {
           0%{
              position: absolute; left: 40vw; top: 20vw;
              transform: scale(.5);
           }
           100%{
              left: 10vw;
           }
        }
        @keyframes card2 {
           0%{
              position: absolute; left: 40vw; top: 20vw;
              transform: scale(.5);
           }
           100%{
              left: 40vw;
           }
        }
        @keyframes card3 {
           0%{
              position: absolute; left: 40vw; top: 20vw;
              transform: scale(.5);
           }
           100%{
              left: 70vw;
           }
        }
        @keyframes card4 {
           0%{
              position: absolute; left: 40vw; top: 20vw;
              transform: scale(.5);
           }
           100%{
              left: 25vw;
              top: 40vw;
           }
        }
        @keyframes card5 {
           0%{
              position: absolute; left: 40vw; top: 20vw;
              transform: scale(.5);
           }
           100%{
              left: 55vw;
              top: 40vw;
           }
        }
    }
    
}
</style>
