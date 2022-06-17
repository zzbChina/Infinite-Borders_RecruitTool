<template>
  <div class="main_panel" >
        <!-- 背景图 -->
        <img src="../assets/main/main_bg_ef8e68d8.jpg" alt="" class="main_bg_img" ref="main_bg_img">
        <!-- 头部 -->
        <div class="top_banner" ref="top_banner">
            <div class="logo">
                <img src="../assets/main/200.webp" alt="">
            </div>
            <div class="select_season" @click="ChoseSeason">{{current_season}}</div>
        </div>

        <!-- 中间的容器 -->
        <div class="center_container" v-show="current_season != '选择赛季'" ref="center_container">
            <div class="card_bag_list" v-for="(b,b_index) in all_season[current_season_index].card_bags" :key="b.index"
            ref="card_bag_list"
            @touchstart="$refs.card_bag_list[b_index].classList.add('click')"
            @touchend="$refs.card_bag_list[b_index].classList.remove('click')"
            @click="SelectThisPacket(b_index)">
                <img :src="b.post" alt="" class="post">
                <div class="name">{{b.name}}</div>
            </div>
        </div>

        <!-- 赛季选择面板 -->
        <div class="season_select_panel" v-show="show.season">
            <div class="return_mask" @click="CloseSeason"></div>
            <div class="season_list" ref="season_list">
                <div class="seasons" v-for="(s,s_index) in all_season" :key="s.index" ref="seasons" 
                @touchstart="$refs.seasons[s_index].classList.add('click')"
                @touchend="SelectThisSeason(s_index)">{{s.name}}</div>
            </div>
        </div>

        <!-- 招募面板 -->
        <div class="recruit_panel" v-show="show.recruit">

            <!-- 卡包名字 -->
            <div class="packet_name">
                <img src="../assets/main/tit-bg_506313d.png" alt="">
                <div class="text">{{current_warrior_pool.name}}</div>
            </div>

            <!-- 返回按钮 -->
            <div class="back_btn"
            ref="recruit_panel_back_btn"
            @touchstart="$refs.recruit_panel_back_btn.classList.add('click');"
            @touchend='CloseRecruit'>
                <img src="../assets/main/arm_bg.png" alt="">
                <div class="text"></div>
            </div>

            <!-- 武将卡 -->
            <div class="warrior_box">
                <div class="warrior_card" ref="warrior_card" v-for="w in recruit_result" :key="w.index">
                    <img :src="w.img" alt="" class="warrior_img">
                    <img src="../assets/main/card-border5-large-23f1.png" alt="" class="warrior_img_5" v-show="w.star == 5">
                    <img src="../assets/main/card-border4-large-3996.png" alt="" class="warrior_img_4" v-show="w.star == 4">
                    <img src="../assets/main/card_mask3.png" alt="" class="warrior_img" v-show="w.star == 3">

                    <div class="star_list">
                        <div class="star" v-for="s in w.star" :key="s.index">
                            <img src="../assets/main/star.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <!-- 五连按钮 -->
            <div class="recruit_btn"
            ref="recruit_btn"
            @touchstart="$refs.recruit_btn.classList.add('click')"
            @touchend="$refs.recruit_btn.classList.remove('click')"
            @click="RecruitFiveTimes">
                <img src="../assets/main/bg_nav_btn.1a7015d3.png" alt="" class="recruit_btn_img">
                <div class="text">招募5次</div>
            </div>
        </div>
            
        
        <!-- 底部道具    -->
        <div class="bottom" ref="bottom">
            <div class="money">
                {{money}}
                <img src="../assets/main/reword1_b47a5c7.png" alt="" class="money_icon">
                <div class="add_money_btn" ref="add_money_btn"
                @click="AddMyMoneyPanel"></div>
            </div>

            <div class="check_result"
            ref="check_result"
            @touchstart="$refs.check_result.classList.add('click')"
            @touchend="CheckCardPool">查看卡池</div>
            
        </div>

        <!-- 卡池面板 -->
        <div class="card_pool_panel" v-show="show.card_pool">
            <div class="packet_name">
                <img src="../assets/main/tit-bg_506313d.png" alt="">
                <div class="text">招募记录</div>
            </div>
            <div class="card_pool_panel_container">
                <div class="card" v-for="c in INDEX_TABLE.all_index" :key="c.index">
                    <img :src="all_warriors[c.id].img.normal" alt="" class="warrior_img">
                    <div class="warrior_name">{{all_warriors[c.id].name}}</div>
                    <div class="times">{{c.time}}</div>
                </div>
            </div>

            <div class="consume_money">消耗玉符 : {{INDEX_TABLE.use_money}}</div>

            <div class="back_btn"
            ref="card_pool_panel_back_btn"
            @touchstart="$refs.card_pool_panel_back_btn.classList.add('click');"
            @touchend="$refs.card_pool_panel_back_btn.classList.remove('click'); show.card_pool = false;">返 回</div>
        </div>

        <!-- 玉符面板 -->
        <div class="add_money_panel" v-show="show.recharge">
            <div class="add_money_panel_container">
                <div class="recharge_box" v-for="(c,c_index) in RECHARGE_TABLE" :key="c.index" ref="recharge_box"
                @touchstart="$refs.recharge_box[c_index].classList.add('click')"
                @touchend="$refs.recharge_box[c_index].classList.remove('click')"
                @click="AddMoney(c.add)">
                    <img src="../assets/main/7_1_86f017b.jpg" alt="">
                    <div class="first_charge" v-show="c.first">首冲</div>
                    <div class="name">{{c.name}}</div>
                </div>
            </div>

            <div class="back_btn" ref="add_money_panel_back_btn" 
            @touchstart="$refs.add_money_panel_back_btn.classList.add('click')"
            @touchend="$refs.add_money_panel_back_btn.classList.remove('click')"
            @click="show.recharge = false;">返 回</div>
        </div>

        <!-- 隐藏面板 -->
        <div class="hide_mask" v-show="show_queue.length != 0" @click="ConfirmOne">
            <div class="big_warrior_card" v-for="(w,w_index) in show_queue" :key="w.w_index"  v-show="w_index == show_queue.length-1">
                
                <div class="shadow" v-show="w.star == 5"></div>
                <div class="shadow1" v-show="w.star == 5"></div>
                
                <!-- 炫光面板 -->
                <div class="special_light"  v-show="w.star == 5"></div>
                <div class="special_light_particle_purple" v-show="w.star == 5"></div>
                <div class="special_light_particle_white" v-show="w.star == 4"></div>

                <img :src="w.img" alt="" class="warrior_img">
                <img src="../assets/main/card-border5-large-23f1.png" alt="" class="warrior_img_5" v-show="w.star == 5">
                <img src="../assets/main/card-border4-large-3996.png" alt="" class="warrior_img_4" v-show="w.star == 4">
                <img src="../assets/main/card_mask3.png" alt="" class="warrior_img" v-show="w.star == 3">
                
                <div class="shadow2" v-show="w.star == 5">
                    <img :src="w.img" alt="" class="warrior_img">
                </div>
            </div>
        </div>

        

        <!-- 音频控件 -->
        <audio src="../assets/mp4/click.mp3" preload="preload" ref="click_mp3"></audio>
        <audio src="../assets/mp4/recruitfive.mp3" preload="preload" ref="recruit_five_audio"></audio>
        <audio src="../assets/mp4/recruitfour.mp3" preload="preload" ref="recruit_four_audio"></audio>
  
        <!-- 点击波纹 -->
        <div class="click_wave" v-show="show.click_screen" ref="click_wave">
            <div class="inner_wave"></div>
        </div>
  
  </div>
</template>

<script>


import warriors from '../mixin/warrior/warriors'//导入武将数据
import warriors4 from '../mixin/warrior/warriors4'//导入武将数据
import warriors3 from '../mixin/warrior/warriors3'//导入武将数据
import season from '../mixin/season/season'//导入赛季数据




export default {
    name : 'Main',
    mixins:[
        warriors,
        warriors4,
        warriors3,
        season,
    ],
    components:{
        //AddWarrior,
    },
    data(){
        return{
            current_season:'选择赛季',
            current_season_index : 0,
            //保底次数
            GUARANTEE_TIME:40,

            RECHARGE_TABLE:[
                {
                    name : '¥648',
                    first:true,
                    add : 12960,
                },
                {
                    name : '¥648',
                    first:false,
                    add : 8100,
                },
                {
                    name : '¥328',
                    first:true,
                    add : 6560,
                },
                {
                    name : '¥328',
                    first:false,
                    add : 4100,
                },
                {
                    name : '¥198',
                    first:true,
                    add : 3960,
                },
                {
                    name : '¥198',
                    first:false,
                    add : 2475,
                },
                {
                    name : '¥98',
                    first:true,
                    add : 1960,
                },
                {
                    name : '¥98',
                    first:false,
                    add : 1225,
                },
                {
                    name : '¥30',
                    first:true,
                    add : 600,
                },
                {
                    name : '¥30',
                    first:false,
                    add : 300,
                },
                {
                    name : '¥6',
                    first:true,
                    add : 120,
                },
                {
                    name : '¥6',
                    first:false,
                    add : 60,
                },

            ],

            show:{
                season:false,
                recruit:false,
                card_pool:false,
                recharge:false,
                result:false,
                click_screen:false,
            },
            money:0,
            INDEX_TABLE:{
                index_sum:0,
                guarantee_times:this.GUARANTEE_TIME,
                use_money:0,
                all_index:[],//该卡包所以武将的索引
                level1:[],
                level2:[],
                level3:[],

                level1_start_index:-1,
                level2_start_index:-1,
                level3_start_index:-1,
            },
            recruit_result:[],
            show_queue:[],

            current_warrior_pool:{
                name : '',
            },
        }
    },
    beforeCreate() {
        
    },
    methods: {
        //点击屏幕
        // TouchScreen(e){
        //     if(this.show.click_screen){
        //         this.show.click_screen = false;
        //         setTimeout(()=>{
        //             let toLeft = Math.floor(e.touches[0].clientX);
        //         let toTop = Math.floor(e.touches[0].clientY);
        //         this.$refs.click_wave.style.left = (toLeft - 25) + 'px';
        //         this.$refs.click_wave.style.top = (toTop-25) + 'px';
        //         this.show.click_screen = true;
        //         },10)
        //     }else{
        //         let toLeft = Math.floor(e.touches[0].clientX);
        //         let toTop = Math.floor(e.touches[0].clientY);
        //         this.$refs.click_wave.style.left = (toLeft - 25) + 'px';
        //         this.$refs.click_wave.style.top = (toTop-25) + 'px';
        //         this.show.click_screen = true;
        //     }
            

        // },
        LeaveScreen(){
            this.show.click_screen = false;
            //console.log(e)
        },
        //选择赛季
        ChoseSeason(){
            //打开赛季选择面板
            this.show.season = true;
            setTimeout(()=>{
                this.$refs.season_list.classList.add('active');
            },10)
        },
        CloseSeason(){
            setTimeout(()=>{
                this.show.season = false;
            },200);
            this.$refs.season_list.classList.remove('active');
        },
        //选择赛季
        SelectThisSeason(index){
            this.$refs.center_container.scrollTo(0,0);
            this.$refs.seasons[index].classList.remove('click');
            this.current_season = '选择赛季';
            
            this.current_season_index = index;
            setTimeout(()=>{
                this.current_season = this.all_season[index].name;
                this.CloseSeason();
            },10);
        },

        //选择这个卡包
        SelectThisPacket(index){
            this.recruit_result = [];

            this.$refs.center_container.classList.add('leave');
            this.$refs.top_banner.classList.add('leave');
            this.$refs.main_bg_img.classList.add('leave');
            this.$refs.bottom.classList.add('leave');

            this.current_warrior_pool = this.all_season[this.current_season_index].card_bags[index];
            //获取武将索引表

            this.INDEX_TABLE ={
                index_sum:0,
                use_money:0,
                all_index:[],
                level1:[],
                level2:[],
                level3:[],

                level1_start_index:-1,
                level2_start_index:-1,
                level3_start_index:-1,
            }
            let start = 0;
            for(let i=0;i < this.all_warriors.length;i++){
                if(start >= this.current_warrior_pool.pool.length){
                    i = this.all_warriors.length;
                }
                for(let j = start;j < this.current_warrior_pool.pool.length;j++){
                    if(this.all_warriors[i].id == this.current_warrior_pool.pool[j].id){

                        this.INDEX_TABLE.index_sum += this.all_warriors[i].level;//表的index指数
                        
                        let item = {
                            id : i,
                            time:0
                        }
                        this.INDEX_TABLE.all_index.push(item);//放入武将的索引

                        if(this.all_warriors[i].level == 1){
                            let ob = {
                                id : i,
                                all_index_table_id : -1
                            }
                            this.INDEX_TABLE.level1.push(ob);
                        }else if(this.all_warriors[i].level == 2){
                            let ob = {
                                id : i,
                                all_index_table_id : -1
                            }
                            this.INDEX_TABLE.level2.push(ob);
                        }else{
                            let ob = {
                                id : i,
                                all_index_table_id : -1
                            }
                            this.INDEX_TABLE.level3.push(ob);
                        }
                        start++;
                        break;
                    }
                }
            }
            //修改索引表的数据
            this.INDEX_TABLE.level1_start_index = this.INDEX_TABLE.level1.length * 1 -1;
            this.INDEX_TABLE.level2_start_index = this.INDEX_TABLE.level1.length * 1 + this.INDEX_TABLE.level2.length * 2 -1;
            this.INDEX_TABLE.level3_start_index = this.INDEX_TABLE.level1.length * 1 + this.INDEX_TABLE.level2.length * 2 + this.INDEX_TABLE.level3.length * 3 -1;
            //建立all_index表对应的索引
            for(let i = 0;i < this.INDEX_TABLE.level1.length;i++){
                for(let j=0;j < this.INDEX_TABLE.all_index.length;j++){
                    if(this.INDEX_TABLE.level1[i].id == this.INDEX_TABLE.all_index[j].id){
                        this.INDEX_TABLE.level1[i].all_index_table_id = j;
                    }
                }
            }
            for(let i = 0;i < this.INDEX_TABLE.level2.length;i++){
                for(let j=0;j < this.INDEX_TABLE.all_index.length;j++){
                    if(this.INDEX_TABLE.level2[i].id == this.INDEX_TABLE.all_index[j].id){
                        this.INDEX_TABLE.level2[i].all_index_table_id = j;
                    }
                }
            }
            for(let i = 0;i < this.INDEX_TABLE.level3.length;i++){
                for(let j=0;j < this.INDEX_TABLE.all_index.length;j++){
                    if(this.INDEX_TABLE.level3[i].id == this.INDEX_TABLE.all_index[j].id){
                        this.INDEX_TABLE.level3[i].all_index_table_id = j;
                    }
                }
            }

            this.show.recruit = true;
        },
        //退出招募
        CloseRecruit(){
            this.$refs.recruit_panel_back_btn.classList.remove('click');
            this.show.recruit = false;
            this.$refs.center_container.classList.remove('leave');
            this.$refs.top_banner.classList.remove('leave');
            this.$refs.main_bg_img.classList.remove('leave');
            this.$refs.bottom.classList.remove('leave');
        },
        //招募五次
        RecruitFiveTimes(){
            this.$refs.click_mp3.play();
            if(this.money < 950){
                return;
            }else{
                this.money -= 950;

                this.INDEX_TABLE.use_money += 950;
                for(let i=0;i<1;i++){
                    this.Test();
                }
                setTimeout(()=>{
                    if(this.show_queue[this.show_queue.length-1]){
                    if(this.show_queue[this.show_queue.length-1].star == 5){
                        this.$refs.recruit_five_audio.load();
                        this.$refs.recruit_five_audio.play();
                    }else if(this.show_queue[this.show_queue.length-1].star == 4){
                        this.$refs.recruit_four_audio.load();
                        this.$refs.recruit_four_audio.play();
                    }
                }
                },10)
                
                localStorage.setItem('brawer_my_money',JSON.stringify(this.money));
            }
            
            
        },
        Test(){
            //生成5张卡
            this.recruit_result = [];
            setTimeout(()=>{
                for(let i =0;i<5;i++){
                    this.DrawOneCard();
                }
            },10)
            this.$refs.recruit_btn.classList.remove('click');
        },
        //抽一张
        DrawOneCard(){
            if(this.INDEX_TABLE.guarantee_times == 0){
                //5星卡池
                // 选择武将级别
                let rand_level_index= Math.floor(Math.random()*this.INDEX_TABLE.index_sum);
                if(rand_level_index <= this.INDEX_TABLE.level1_start_index){
                    //说明抽出1指数武将
                    let rand = Math.floor(Math.random()*this.INDEX_TABLE.level1.length);
                    let new_warrior = {
                        star : 5,
                        img : this.all_warriors[this.INDEX_TABLE.level1[rand].id].img.normal
                    }
                    //加次数
                    this.INDEX_TABLE.all_index[this.INDEX_TABLE.level1[rand].all_index_table_id].time++;
                    this.recruit_result.push(new_warrior);
                    this.show_queue.unshift(new_warrior);
                }else if(rand_level_index > this.INDEX_TABLE.level1_start_index &&rand_level_index <= this.INDEX_TABLE.level2_start_index){
                    //说明抽出2指数武将
                    let rand = Math.floor(Math.random()*this.INDEX_TABLE.level2.length);
                    let new_warrior = {
                        star : 5,
                        img : this.all_warriors[this.INDEX_TABLE.level2[rand].id].img.normal
                    }
                    //加次数
                    this.INDEX_TABLE.all_index[this.INDEX_TABLE.level2[rand].all_index_table_id].time++;
                    this.recruit_result.push(new_warrior);
                    this.show_queue.unshift(new_warrior);
                }else{
                    //说明抽出3指数武将
                    let rand = Math.floor(Math.random()*this.INDEX_TABLE.level3.length);
                    let new_warrior = {
                        star : 5,
                        img : this.all_warriors[this.INDEX_TABLE.level3[rand].id].img.normal
                    }
                    //加次数
                    this.INDEX_TABLE.all_index[this.INDEX_TABLE.level3[rand].all_index_table_id].time++;
                    this.recruit_result.push(new_warrior);
                    this.show_queue.unshift(new_warrior);
                }
                this.show.result = true;
                this.INDEX_TABLE.guarantee_times = this.GUARANTEE_TIME;//每出一张五星卡就重置保底次数
                return ;
            }
            let random_select = Math.floor(Math.random()*20);
            if(random_select == 0){
                //5星卡池
                // 选择武将级别
                let rand_level_index= Math.floor(Math.random()*this.INDEX_TABLE.index_sum);
                if(rand_level_index <= this.INDEX_TABLE.level1_start_index){
                    //说明抽出1指数武将
                    let rand = Math.floor(Math.random()*this.INDEX_TABLE.level1.length);
                    let new_warrior = {
                        star : 5,
                        img : this.all_warriors[this.INDEX_TABLE.level1[rand].id].img.normal
                    }
                    //加次数
                    this.INDEX_TABLE.all_index[this.INDEX_TABLE.level1[rand].all_index_table_id].time++;
                    this.recruit_result.push(new_warrior);
                    this.show_queue.unshift(new_warrior);
                }else if(rand_level_index > this.INDEX_TABLE.level1_start_index &&rand_level_index <= this.INDEX_TABLE.level2_start_index){
                    //说明抽出2指数武将
                    let rand = Math.floor(Math.random()*this.INDEX_TABLE.level2.length);
                    let new_warrior = {
                        star : 5,
                        img : this.all_warriors[this.INDEX_TABLE.level2[rand].id].img.normal
                    }
                    //加次数
                    this.INDEX_TABLE.all_index[this.INDEX_TABLE.level2[rand].all_index_table_id].time++;
                    this.recruit_result.push(new_warrior);
                    this.show_queue.unshift(new_warrior);
                }else{
                    //说明抽出3指数武将
                    let rand = Math.floor(Math.random()*this.INDEX_TABLE.level3.length);
                    let new_warrior = {
                        star : 5,
                        img : this.all_warriors[this.INDEX_TABLE.level3[rand].id].img.normal
                    }
                    //加次数
                    this.INDEX_TABLE.all_index[this.INDEX_TABLE.level3[rand].all_index_table_id].time++;
                    this.recruit_result.push(new_warrior);
                    this.show_queue.unshift(new_warrior);
                }
                this.show.result = true;
                this.INDEX_TABLE.guarantee_times = this.GUARANTEE_TIME;//每出一张五星卡就重置保底次数
            }else if(random_select >0 && random_select < 7){
                //4星卡池
                let random4 = Math.floor(Math.random()*20);
                let new_warrior = {
                    star:4,
                    img : this.all_warrior4[random4].img
                }
                this.recruit_result.push(new_warrior);
                this.show_queue.unshift(new_warrior);
                this.INDEX_TABLE.guarantee_times --;
            }else{
                //3星卡池
                let random3 = Math.floor(Math.random()*11);
                let new_warrior = {
                    star:3,
                    img : this.all_warrior3[random3].img
                }
                this.recruit_result.push(new_warrior);
                this.INDEX_TABLE.guarantee_times --;
            }
        },

        //查看武将卡池
        CheckCardPool(){
            this.$refs.check_result.classList.remove('click');
            this.show.card_pool = true;
        },

        //添加玉符面板
        AddMyMoneyPanel(){
            this.show.recharge = true;
        },

        AddMoney(value){
            this.money += value;
            this.show.recharge = false;
            localStorage.setItem('brawer_my_money',JSON.stringify(this.money));
        },
        //招募面板确认接收该武将
        ConfirmOne(){
            this.show_queue.pop();
            if(this.show_queue[this.show_queue.length-1]){
                if(this.show_queue[this.show_queue.length-1].star == 5){
                    //this.$refs.recruit_five_audio.play();
                    this.$refs.recruit_five_audio.load();
                    this.$refs.recruit_five_audio.play();
                }else if(this.show_queue[this.show_queue.length-1].star == 4){
                    this.$refs.recruit_four_audio.load();
                    this.$refs.recruit_four_audio.play();
                }
            }

        }
    },
    mounted(){
        // let arr = ['诸葛恪','华佗','貂蝉','姜维','黄月英','小乔','步皇后','卞夫人'];
        // let s_id = 0;
        // console.clear();
        // for(let i = 0;i<this.all_warriors.length;i++){
        //     for(let j= s_id;j < arr.length;j++){
        //         if(this.all_warriors[i].name == arr[j]){
        //             s_id++;
        //             console.log(" id:",this.all_warriors[i].id);
        //             break;
        //         }
        //     }
        // }
        if(localStorage.getItem('brawer_my_money')){
            this.money = JSON.parse(localStorage.getItem('brawer_my_money'));
        }
    }
    
}
</script>

<style lang='less'>
.main_panel{
    position: absolute; left: 0; top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    .center_container{
        position: absolute; left: 5vw; top: 15vh;
        width: 90vw;
        height: 70vh;
        overflow-x:hidden ;
        overflow-y: scroll;
        transition: all .2s;
        .card_bag_list{
            position: relative;
            margin: 5px 0 0 0;
            width: 90vw;
            height: 25vw;
            border: 2px solid darkred;
            box-sizing: border-box;
            background: darkred;
            transition: all .2s;
            overflow: hidden;
            animation: card_bag_list .3s linear 1;
            .post{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
                transition: all .15s;
            }
            .name{
                position:absolute; bottom: 0; left: 0;
                padding-left: 5vw;
                width: 40vw;
                height: 8vw;
                line-height: 8vw;
                text-align: left;
                font-size: 2vw;
                color: rgb(224, 222, 136);
                background:linear-gradient(to right,black,rgba(0, 0, 0, 0));
            }
        }
        .card_bag_list:nth-of-type(1){
            animation-delay: -.15s;
        }
        .card_bag_list:nth-of-type(2){
            animation-delay: -.14s;
        }
        .card_bag_list:nth-of-type(3){
            animation-delay: -.13s;
        }
        .card_bag_list:nth-of-type(4){
            animation-delay: -.12s;
        }
        .card_bag_list:nth-of-type(5){
            animation-delay: -.11s;
        }
        .card_bag_list:nth-of-type(6){
            animation-delay: -.1s;
        }
        @keyframes  card_bag_list{
            0%{
                opacity: 0;
                //transform: scale(.2);
                height: 30vw;
            }
            100%{
                opacity: 1;
                //transform: scale(1);
                height: 25vw;
            }
        }
        .card_bag_list.click{
            opacity: .8;
            .post{
                transform: scale(1.1);
            }
        }
        
    }
    .center_container.leave{
        transform: translateX(100vw);
    }
    .season_select_panel{
        position: absolute; left: 0; top: 0;
        width: 100%;
        height: 100%;
        .return_mask{
            position: absolute; left: 0; top: 0;
            width: 100%;
            height: 100%;
        }
        .season_list{
            position: absolute; right: 5vw; top: 15vh;
            width: 35vw;
            padding: 2vh 0 0 0;
            height: 0;
            background: rgba(132, 132, 132, 0.579);
            transition: all .25s ease-out;
            .seasons{
                width: 35vw;
                height: 10vw;
                line-height: 10vw;
                text-align: center;
                color: rgb(208, 208, 208);
                font-size: 2vw;
                font-weight: bold;
                transition: all .2s;
            }
            .seasons.click{
                color: white;
                background: #000;
            }
        }
        .season_list.active{
            height: 60vh;
            background: rgba(20, 20, 20, 0.8);
        }
    }

    //招募面板
    .recruit_panel{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 100vh;
        background: url('../assets/main/dwajdh.jpg')no-repeat;
        background-size: cover;
        .packet_name{
            position: absolute; left: 0; top: 10vh;
            width: 45vw;
            height: 10vw;
            animation: packet_name .2s ease-out 1;
            @keyframes packet_name {
               0%{
                  transform: translateX(-45vw);
               }
               100%{
                  transform: translateX(-0);
               }
            }
            img{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
            }
            .text{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: 10vw;
                color: white;
                font-size: 3vw;
            }
        }
        .back_btn{
            position: absolute; right: 8vw; top: 9vh;
            width: 15vw;
            height: 15vw;
            opacity: .5;
            transition: all .1s;
            img{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
                transition: all .15s;
            }
            .text{
                position: absolute; right: 0; top: 0;
                width: 15vw;
                height: 15vw;
                text-align: center;
                line-height: 15vw;
                color: white;
                font-size: 2.5vw;
            }
        }
        .back_btn.click{
            opacity: .8;
            transform: scale(.8);
        }
        .recruit_btn{
            position: absolute; bottom: 15vh; left: 34vw;
            width: 32vw;
            height: 10vw;
            transition: all .15s;
            animation: recruit_btn .25s linear 1;
            .recruit_btn_img{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0 2px 9px rgb(71, 71, 71);
            }
            .text{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: 10vw;
                font-size: 4vw;
                font-weight: bold;
                color: rgb(59, 59, 59);
            }
        }
        .recruit_btn.click{
            transform: scale(.8);
        }
        @keyframes recruit_btn {
           0%{
              bottom: 5vh;
              opacity: 0;
           }
           100%{
              bottom: 15vh;
              opacity: 1;
           }
        }
    }
    //武将卡池面板
    .card_pool_panel{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(255, 255, 255, 0.9);
        .packet_name{
            position: absolute; left: 0; top: 5vh;
            width: 45vw;
            height: 10vw;
            img{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
            }
            .text{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: 10vw;
                color: white;
                font-size: 3vw;
            }
        }
        .card_pool_panel_container{
            position: absolute; left: 50%; top : 50%;
            transform : translate(-50%,-50%);
            width: 100vw;
            height: 70vh;
            overflow-y: scroll;
            overflow-x: hidden;
            .card{
                position: relative;
                float: left;
                margin: 2.5vw 0 0 2.5vw;
                width: 30vw;
                height: 18vw;
                border-radius: 1vw;
                border: 1vw solid rgb(255, 255, 255);
                box-sizing: border-box;
                background: rgb(255, 255, 255);
                box-shadow: 0 2px 5px rgb(56, 56, 56);
                .warrior_img{
                    position: absolute; left: 0; top: 0;
                    width: 11vw;
                    height: 16vw;
                    border-radius: .5vw 0 0 .5vw;
                }
                .warrior_name{
                    position: absolute; left: 13vw; top: 1vw;
                    width: 14vw;
                    height: 4vw;
                    line-height: 4vw;
                    border-radius: .5vw;
                    background:linear-gradient(to right bottom,rgb(33, 33, 33),rgb(114, 0, 0));
                    text-align: center;
                    color: white;
                    font-size: 2vw;
                }
                .times{
                    position: absolute; left: 13vw; top: 7vw;
                    width: 14vw;
                    height: 8vw;
                    line-height: 8vw;
                    background:linear-gradient(to right bottom,rgb(33, 33, 33),rgb(114, 0, 0));
                    text-align: center;
                    border-radius: 1vw;
                    color: rgb(255, 255, 255);
                    font-size: 4vw;
                }
            }
        }
        .consume_money{
            position: absolute; bottom: 5vw; left: 10vw;
            width: 35vw;
            height: 8vw;
            line-height: 8vw;
            font-size: 2vw;
            font-weight: bold;
            background: rgb(71, 0, 0);
            text-align: center;
            color:rgb(255, 255, 255);
        }
        .back_btn{
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
            transition: all .2s;
        }
        .back_btn.click{
            background: rgb(91, 91, 91);
            color: white;
        }
    }

    

    .add_money_panel{
        position: absolute; left:0;top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(255, 255, 255, 0.9);
        .add_money_panel_container{
            position: absolute; left: 50%; top : 50%;
            transform : translate(-50%,-50%);
            width: 90vw;
            height: 70vh;
            overflow-y: scroll;
            overflow-x: hidden;
            .recharge_box{
                box-sizing: border-box;
                box-shadow: 0 3px 7px rgb(85, 85, 85);
                position: relative;
                float: left;
                margin: 5vw 0 0 3vw;
                width: 40.5vw;
                height: 30vw;
                background: rgb(69, 0, 0);
                overflow: hidden;
                border-radius: 3vw;
                transition: all .15s;
                .name{
                    position: absolute; bottom: 0; left: 0;
                    width: 100%;
                    height: 8vw;
                    background:linear-gradient(to right bottom,black,red);
                    text-align: center;
                    line-height: 8vw;
                    color: white;
                    font-size: 3vw;
                }
                .first_charge{
                    position: absolute; left: 0; top: 0;
                    width: 15vw;
                    height: 7vw;
                    line-height: 7vw;
                    border-radius: 0 0 3vw 0;
                    text-align: center;
                    color: white;
                    font-size: 3vw;
                    background:linear-gradient(to bottom right,rgb(0, 89, 0),rgb(0, 131, 0));
                }
                img{
                    position: absolute; left: 0; top: 0;
                    width: 100%;
                    height: 100%;
                }
            }
            .recharge_box.click{
                opacity: .7;
            }
        }
        .back_btn{
            position: absolute; top: 87vh; left: 10vw;
            width: 80vw;
            height: 12vw;
            background:linear-gradient(to right bottom,black,rgb(255, 255, 255));
            text-align: center;
            line-height: 12vw;
            color: white;
            font-size: 4vw;
            box-shadow: 0 2px 8px black;
            animation: back_btn linear 1;
            transition: all .15s;
        }
        @keyframes back_btn {
           0%{
              transform: translateY(30px);
           }
           100%{
              transform: translateY(0);
           }
        }
        .back_btn.click{
            transform: scale(.8);
        }
    }

    .hide_mask{
        position: absolute; left: 0;top: 0;
        width: 100vw;
        height: 100vh;
        //background:linear-gradient(to bottom,rgb(169, 169, 169),rgb(46, 46, 46));
        //background: rgb(8, 35, 56);
        background: url('../assets/main/dwajdh.jpg')no-repeat;
        background-size: cover;
        .special_light_particle_purple,.special_light_particle_white{
            position: absolute; left: 50%; top : 50%;
            margin: -22.5vw 0 0 -15vw;
            width: 30vw;
            height: 45vw;
            box-shadow: 0 0 100px rgb(185, 7, 217);
            animation: special_light_particle 3s linear infinite;
        }
        .special_light_particle_white{
            box-shadow: 0 0 100px rgb(255, 255, 255);
        }
        .special_light_white{
            position: absolute; left: -50vw; top: -50vh;
            margin: 22.5vw 0 0 15vw;
            width: 100vw;
            height: 100vh;
            z-index: 1;
            opacity: 0;
            filter: blur(3px);
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 100px rgba(255, 255, 255, 0.2);
            animation: special_light .4s linear 1;
        }
        .special_light{
            position: absolute; left: -50vw; top: -50vh;
            margin: 22.5vw 0 0 15vw;
            width: 100vw;
            height: 100vh;
            z-index: 1;
            opacity: 0;
            filter: blur(3px);
            background: rgba(208, 0, 245, 0.608);
            box-shadow: 0 0 100px rgb(208, 0, 245);
            animation: special_light .4s linear 1;
        }
        @keyframes special_light_particle {
           0%{
              transform: scale(.7);
           }
           50%{
              transform: scale(1);
           }
           100%{
              transform: scale(.7);
           }
        }
        @keyframes special_light {
           0%{
              opacity: 0;
              transform: scale(3);
           }
           20%{
              opacity: 1;
              transform: scale(3);
           }
           100%{
              opacity: 0;
           }
        }
        .light{
            position: absolute; left: 50%; top : 50%;
            margin: -40vw 0 0 -40vw;
            width: 80vw;
            height: 80vw;
            animation: light linear 5s infinite;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .shadow,.shadow1{
            position: absolute; left: 50%; top : 50%;
            margin: -22.5vw 0 0 -15vw;
            width: 30vw;
            height: 45vw;
            border: 2px solid rgb(220, 53, 243);
            box-shadow: 0 0 10px rgb(169, 7, 227);
            box-sizing: border-box;
            animation: shadow linear 1.5s infinite;
        }
        .shadow1{
            animation-delay: .4s;
        }
        .shadow2{
            position: absolute; left: 50%; top : 50%;
            margin: -22.5vw 0 0 -15vw;
            width: 30vw;
            height: 45vw;
            animation: warrior_img_5 .7s linear 1;
            background: rgb(127, 7, 148);
            //animation-delay: .2s;
            opacity: 0;
            filter: blur(2px);
            img{
                width: 100%;
                height: 100%;
            }
        }
        @keyframes warrior_img_5 {
           0%{
              transform: scale(0);
              box-shadow: 0 0 20px rgb(127, 7, 148);
              opacity: 1;
           }
           10%{
              transform: scale(0);
              opacity: 1;
           }
           60%{
              transform: scale(4);
              opacity: 1;
           }
           100%{
              transform: scale(5);
              opacity: 0;
           }
        }
        @keyframes shadow {
           0%{
              transform: scale(.8);
           }
           70%{
              transform: scale(1.1);
              opacity: 1;
           }
           100%{
              transform: scale(1.2);
              opacity: 0;
           }
        }
        @keyframes light {
           0%{
              transform: rotate(360deg);
           }
           100%{
              transform: rotate(0);
           }
        }
        .big_warrior_card{
            position: absolute; left: 50%; top : 50%;
            margin: -22.5vw 0 0 -15vw;
            width: 30vw;
            height: 45vw;
            animation:big_warrior_card linear .3s 1 ;
            .warrior_img,.warrior_img_5,.warrior_img_4{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
            }
            .warrior_img_5{
                box-shadow: 0 0 10px rgb(169, 7, 227);
            }
            .warrior_img_4{
                box-shadow: 0 0 10px rgb(8, 111, 237);
            }
            
        }
        @keyframes big_warrior_card {
           0%{
              transform: scale(0);
           }
           20%{
              transform: scale(0);
           }
           100%{
              transform: scale(1);
           }
        }
       
    }

    .click_wave{
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        box-sizing: border-box;
        border: 3px solid rgb(255, 230, 0);
        box-shadow: 0 0 10px rgb(255, 230, 0);
        animation: click_wave .25s linear 1;
        opacity: 0;
        //background: #000;
        .inner_wave{
            position: absolute; left: 50%; top: 50%;
            margin: -20px 0 0 -20px;
            width: 40px;
            height: 40px;
            border-radius: 20px;
            box-sizing: border-box;
            border: 3px solid rgb(255, 230, 0);
            box-shadow: 0 0 10px rgb(255, 230, 0);
        }

    }
    @keyframes click_wave {
       0%{
          transform: scale(.4);
          opacity: 0;
       }
       80%{
          transform: scale(.9);
          opacity: 1;
       }
       100%{
          transform: scale(1);
          opacity: 0;
       }
    }
}
</style>