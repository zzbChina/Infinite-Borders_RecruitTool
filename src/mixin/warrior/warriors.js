let warriors = {
    
    data(){
        return{
            all_warriors:[
                //4c
                {
                    id:60,
                    name : '颜良&文丑',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 4,
                    att : 3,
                    level:2,
                    sign : 's3',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (121).jpg'),
                    }
                },
                {
                    id:70,
                    name : '荀彧&荀攸',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 4,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (114).jpg'),
                    }
                },
                {
                    id:100,
                    name : '关兴&张苞',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 4,
                    att : 3,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (1).jpg'),
                    }
                },
                //3.5c 群
                {
                    id:200,
                    name : '袁绍',
                    camp : '群',
                    arms : '弓',
                    red : 0,
                    cost : 3.5,
                    att : 3,
                    level:1,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (2).jpg'),  
                    }
                },
                {
                    id:350,
                    name : '吕布',
                    camp : '群',
                    arms : '弓',
                    red : 0,
                    cost : 3.5,
                    att : 4,
                    level:1,
                    sign : 's2',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (111).jpg'),    
                    }
                },
                {
                    id:300,
                    name : '兀突骨',
                    camp : '群',
                    arms : '步',
                    red : 0,
                    cost : 3.5,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (3).jpg'),    
                    }
                },
                {
                    id:400,
                    name : '华雄',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3.5,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (4).jpg'),     
                    }
                },
                //3.5c 魏
                {
                    id:500,
                    name : '张辽',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3.5,
                    att : 3,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (5).jpg'),
   
                    }
                },
                {
                    id:600,
                    name : '曹操',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3.5,
                    att : 2,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (6).jpg'),    
                    }
                },
                //3.5c 蜀
                {
                    id:700,
                    name : '沙摩柯',
                    camp : '蜀',
                    arms : '弓',
                    red : 0,
                    cost : 3.5,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (7).jpg'),  
                    }
                },
                {
                    id:800,
                    name : '赵云',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3.5,
                    att : 3,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (8).jpg'),  
                    }
                },
                {
                    id:801,
                    name : 'sp赵云',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3.5,
                    att : 3,
                    level:1,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (8).jpg'),     
                    }
                },
                {
                    id:900,
                    name : '刘备',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3.5,
                    att : 3,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (9).jpg'),   
                    }
                },
                {
                    id:1000,
                    name : '张飞',
                    camp : '蜀',
                    arms : '骑',
                    red : 0,
                    cost : 3.5,
                    att : 2,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (10).jpg'),  
                    }
                },
                //3.5c 吴
                {
                    id:1100,
                    name : '吕蒙',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 3.5,
                    att : 4,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (11).jpg'),     
                    }
                },
                {
                    id:1200,
                    name : '小乔＆大乔',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 3.5,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (12).jpg'),   
                    }
                },
                {
                    id:1300,
                    name : '孙坚',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 3.5,
                    att : 3,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (13).jpg'),  
                    }
                },
                //3.5c 汉
                {
                    id:1400,
                    name : '灵帝',
                    camp : '汉',
                    arms : '弓',
                    red : 0,
                    cost : 3.5,
                    att : 4,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (14).jpg'),    
                    }
                },
                {
                    id:1500,
                    name : '吕布',
                    camp : '汉',
                    arms : '骑',
                    red : 0,
                    cost : 3.5,
                    att : 3,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (15).jpg'),    
                    }
                },

                //3c群
                {
                    id:1600,
                    name : '于吉',
                    camp : '群',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (16).jpg'),   
                    }
                },
                {
                    id:1700,
                    name : '张宝',
                    camp : '群',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 4,
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (17).jpg'),      
                    }
                },
                {
                    id:1800,
                    name : '陈宫',
                    camp : '群',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 4,
                    level:1,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (18).jpg'),    
                    }
                },
                {
                    id:1900,
                    name : '吕姬',
                    camp : '群',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (19).jpg'),    
                    }
                },
                {
                    id:2000,
                    name : '张梁',
                    camp : '群',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (20).jpg'),     
                    }
                },
                {
                    id:2100,
                    name : '孟获',
                    camp : '群',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (21).jpg'),     
                    }
                },
                {
                    id:2200,
                    name : '张宁',
                    camp : '群',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (22).jpg'),    
                    }
                },
                {
                    id:2300,
                    name : '贾诩',
                    camp : '群',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (23).jpg'),     
                    }
                },
                {
                    id:2400,
                    name : '田丰',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (24).jpg'),     
                    }
                },
                {
                    id:2500,
                    name : '公孙瓒',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (25).jpg'),   
                    }
                },
                {
                    id:2600,
                    name : '高顺',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (26).jpg'),   
                    }
                },
                {
                    id:2700,
                    name : '张绣',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 1,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (27).jpg'),  
                    }
                },
                {
                    id:2800,
                    name : '张郃',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (28).jpg'),  
                    }
                },
                {
                    id:2900,
                    name : '庞德',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (29).jpg'),    
                    }
                },
                {
                    id:3000,
                    name : '科比能',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (30).jpg'),   
                    }
                },
                {
                    id:3100,
                    name : '木鹿大王',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (31).jpg'),   
                    }
                },
                {
                    id:3200,
                    name : '马超',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (32).jpg'),     
                    }
                },
                {
                    id:3300,
                    name : '董卓',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 1,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (33).jpg'),    
                    }
                },

                //3c魏
                {
                    id:3400,
                    name : '贾诩',
                    camp : '魏',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 4,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (34).jpg'),
   
                    }
                },
                {
                    id:3450,
                    name : '钟会',
                    camp : '魏',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (112).jpg'),
                    }
                },
                {
                    id:3500,
                    name : '乐进',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:1,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (35).jpg'),  
                    }
                },
                {
                    id:3600,
                    name : '曹仁',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (36).jpg'),   
                    }
                },
                {
                    id:3700,
                    name : '荀攸',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (37).jpg'),    
                    }
                },
                {
                    id:3800,
                    name : '典韦',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:3,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (38).jpg'),  
                    }
                },
                {
                    id:3900,
                    name : '郝昭',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (39).jpg'),  
                    }
                },
                {
                    id:4000,
                    name : '许褚',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (40).jpg'),  
                    }
                },
                {
                    id:4100,
                    name : '司马懿',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (41).jpg'),     
                    }
                },
                {
                    id:4200,
                    name : '邓艾',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (42).jpg'),  
                    }
                },
                {
                    id:4300,
                    name : '曹彰',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:1,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (43).jpg'),    
                    }
                },
                {
                    id:4400,
                    name : '徐晃',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (44).jpg'),    
                    }
                },
                {
                    id:4500,
                    name : '夏侯惇',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 1,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (45).jpg'),  
                    }
                },
                {
                    id:4600,
                    name : '夏侯渊',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (46).jpg'),  
                    }
                },
                {
                    id:4700,
                    name : '关羽',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 1,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (47).jpg'), 
                    }
                },
                {
                    id:4800,
                    name : '荀彧',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (48).jpg'), 
                    }
                },
                {
                    id:4850,
                    name : '郭嘉',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 's2',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (108).jpg'),  
                    }
                },
                {
                    id:4852,
                    name : '曹纯',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 's3',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (118).jpg'),   
                    }
                },
                //3c蜀
                {
                    id:4855,
                    name : '诸葛亮',
                    camp : '蜀',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:1,
                    sign : 's3',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (119).jpg'),
                    }
                },
                {
                    id:4900,
                    name : '周仓',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (49).jpg'),
                    }
                },
                {
                    id:5000,
                    name : '夏侯霸',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (50).jpg'),
                    }
                },
                {
                    id:5100,
                    name : '魏延',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (51).jpg'),  
                    }
                },
                {
                    id:5200,
                    name : '黄忠',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (52).jpg'),
                    }
                },
                {
                    id:5300,
                    name : '关银屏',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (53).jpg'), 
                    }
                },
                {
                    id:5400,
                    name : '诸葛亮',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (54).jpg'), 
                    }
                },
                {
                    id:5450,
                    name : '庞统',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 's2',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (110).jpg'),
                    }
                },
                {
                    id:5500,
                    name : '严颜',
                    camp : '蜀',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (55).jpg'), 
                    }
                },
                {
                    id:5600,
                    name : '马岱',
                    camp : '蜀',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:1,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (56).jpg'),
                    }
                },
                {
                    id:5700,
                    name : '法正',
                    camp : '蜀',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (57).jpg'), 
                    }
                },
                {
                    id:5800,
                    name : '徐庶',
                    camp : '蜀',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 1,
                    level:1,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (58).jpg'),  
                    }
                },
                {
                    id:5900,
                    name : '关羽',
                    camp : '蜀',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:1,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (59).jpg'),
                    }
                },
                //3c吴
                {
                    id:6000,
                    name : '蒋钦',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 4,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (60).jpg'), 
                    }
                },
                {
                    id:6100,
                    name : '孙鲁班',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 4,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (61).jpg'), 
                    }
                },
                {
                    id:6200,
                    name : '张昭',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (62).jpg'),
                    }
                },
                {
                    id:6300,
                    name : '凌统',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (63).jpg'),
                    }
                },
                {
                    id:6400,
                    name : '诸葛恪',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (64).jpg'), 
                    }
                },
                {
                    id:6500,
                    name : '周瑜',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 4,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (65).jpg'),  
                    }
                },
                {
                    id:6600,
                    name : '孙权',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 4,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (66).jpg'), 
                    }
                },
                {
                    id:6700,
                    name : '程普',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (67).jpg'), 
                    }
                },
                {
                    id:6800,
                    name : '周泰',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (68).jpg'),  
                    }
                },
                {
                    id:6900,
                    name : '黄盖',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:3,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (69).jpg'), 
                    }
                },
                {
                    id:7000,
                    name : '陆抗',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (70).jpg'),  
                    }
                },
                {
                    id:7100,
                    name : '甘宁',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (71).jpg'),  
                    }
                },
                {
                    id:7120,
                    name : '陆逊',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 's2',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (109).jpg'),
                    }
                },
                
                {
                    id:7200,
                    name : '孙策',
                    camp : '吴',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (72).jpg'), 
                    }
                },
                //3c汉
                {
                    id:7300,
                    name : '刘表',
                    camp : '汉',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (73).jpg'), 
                    }
                },
                {
                    id:7400,
                    name : '朱儁',
                    camp : '汉',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 4,
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (74).jpg'), 
                    }
                },
                {
                    id:7500,
                    name : '张机',
                    camp : '汉',
                    arms : '弓',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (75).jpg'),  
                    }
                },
                {
                    id:7600,
                    name : '皇甫嵩',
                    camp : '汉',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 3,
                    level:1,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (76).jpg'), 
                    }
                },
                {
                    id:7700,
                    name : '华佗',
                    camp : '汉',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (77).jpg'),
                    }
                },
                {
                    id:7800,
                    name : '袁绍',
                    camp : '汉',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (78).jpg'),  
                    }
                },
                {
                    id:7820,
                    name : '董卓',
                    camp : '汉',
                    arms : '步',
                    red : 0,
                    cost : 3,
                    att : 4,
                    level:1,
                    sign : 's2',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (107).jpg'), 
                    }
                },
                {
                    id:7900,
                    name : '潘凤',
                    camp : '汉',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (79).jpg'), 
                    }
                },
                {
                    id:8000,
                    name : '卢植',
                    camp : '汉',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 1,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (80).jpg'),
                    }
                },
                {
                    id:8001,
                    name : 'sp卢植',
                    camp : '汉',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 1,
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (80).jpg'),
                    }
                },

                //2.5c群
                {
                    id:8100,
                    name : '李儒',
                    camp : '群',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (81).jpg'),
                    }
                },
                {
                    id:8200,
                    name : '董白',
                    camp : '群',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (82).jpg'), 
                    }
                },
                {
                    id:8300,
                    name : '貂蝉',
                    camp : '群',
                    arms : '步',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (83).jpg'),  
                    }
                },
                {
                    id:8400,
                    name : '祝融夫人',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (84).jpg'), 
                    }
                },
                {
                    id:8401,
                    name : 'sp祝融夫人',
                    camp : '蜀',
                    arms : '骑',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (84).jpg'),
                    }
                },
                {
                    id:8500,
                    name : '张角',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (85).jpg'),
                    }
                },
                {
                    id:8501,
                    name : 'sp张角',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 3,
                    att : 2,
                    level:3,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (85).jpg'),  
                    }
                },
                {
                    id:8510,
                    name : '褒姒',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (115).jpg'),  
                    }
                },
                //2.5c魏
                {
                    id:8600,
                    name : '郭皇后',
                    camp : '魏',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (86).jpg'),
                    }
                },
                {
                    id:8700,
                    name : '王朗',
                    camp : '魏',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (87).jpg'),
                    }
                },
                {
                    id:8800,
                    name : '张春华',
                    camp : '魏',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (88).jpg'),
                    }
                },
                {
                    id:8900,
                    name : '曹丕',
                    camp : '魏',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 4,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (89).jpg'),
                    }
                },
                {
                    id:8905,
                    name : '王异',
                    camp : '魏',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 4,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (113).jpg'),
                    }
                },
                {
                    id:9000,
                    name : '张郃',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (90).jpg'),
                    }
                },
                {
                    id:9001,
                    name : 'sp张郃',
                    camp : '魏',
                    arms : '步',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:3,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (90).jpg'),
                    }
                },
                {
                    id:9100,
                    name : '曹植',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (91).jpg'), 
                    }
                },
                
                //2.5c蜀
                {
                    id:9200,
                    name : '张姬',
                    camp : '蜀',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:1,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (92).jpg'),
                    }
                },
                {
                    id:9300,
                    name : '刘禅',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:2,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (93).jpg'),
                    }
                },
                {
                    id:9400,
                    name : '姜维',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (94).jpg'),
                    }
                },
                {
                    id:9401,
                    name : 'sp姜维',
                    camp : '蜀',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (94).jpg'),
                    }
                },
                {
                    id:9500,
                    name : '黄月英',
                    camp : '蜀',
                    arms : '步',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (95).jpg'),
                    }
                },
                {
                    id:9600,
                    name : '马云禄',
                    camp : '蜀',
                    arms : '骑',
                    red : 0,
                    cost : 2.5,
                    att : 3,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (96).jpg'), 
                    }
                },
                //2.5c吴
                {
                    id:9700,
                    name : '小乔',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (97).jpg'),
                    }
                },
                {
                    id:9800,
                    name : '太史慈',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 4,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (98).jpg'),
                    }
                },
                {
                    id:9801,
                    name : 'sp太史慈',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 4,
                    level:3,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (98).jpg'), 
                    }
                },
                {
                    id:9900,
                    name : '孙尚香',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 4,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (99).jpg'),
                    }
                },
                {
                    id:9901,
                    name : 'sp孙尚香',
                    camp : '蜀',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 4,
                    level:3,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (99).jpg'),
                    }
                },
                {
                    id:10000,
                    name : '周姬',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (100).jpg'),
                    }
                },
                {
                    id:10001,
                    name : 'sp周姬',
                    camp : '吴',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:3,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (100).jpg'),
                    }
                },
                {
                    id:10100,
                    name : '大乔',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 2.5,
                    att : 3, 
                    level:1,
                    sign : 'xp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (101).jpg'),
                    }
                },
                {
                    id:10120,
                    name : '步皇后',
                    camp : '吴',
                    arms : '步',
                    red : 0,
                    cost : 2.5,
                    att : 2,
                    level:2,
                    sign : 's3',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (120).jpg'),
                    }
                },

                //2.5c汉
                {
                    id:10200,
                    name : '何太后',
                    camp : '汉',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 3, 
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (102).jpg'),
                    }
                },
                {
                    id:10300,
                    name : '貂蝉',
                    camp : '汉',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 2, 
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (103).jpg'),
                    }
                },
                {
                    id:10310,
                    name : '王昭君',
                    camp : '汉',
                    arms : '骑',
                    red : 0,
                    cost : 2.5,
                    att : 2, 
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (116).jpg'),
                    }
                },
                {
                    id:10320,
                    name : '司马懿',
                    camp : '汉',
                    arms : '弓',
                    red : 0,
                    cost : 2.5,
                    att : 3, 
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (117).jpg'), 
                    }
                },

                //2c群
                {
                    id:10400,
                    name : '甄洛',
                    camp : '群',
                    arms : '弓',
                    red : 0,
                    cost : 2,
                    att : 3, 
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (104).jpg'), 
                    }
                },
                {
                    id:10401,
                    name : 'sp甄洛',
                    camp : '群',
                    arms : '弓',
                    red : 0,
                    cost : 2,
                    att : 3, 
                    level:2,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (104).jpg'),   
                    }
                },

                //2c魏
                {
                    id:10500,
                    name : '卞夫人',
                    camp : '魏',
                    arms : '骑',
                    red : 0,
                    cost : 2,
                    att : 2, 
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (105).jpg'),
                    }
                },

                //2c汉
                {
                    id:10600,
                    name : '蔡文姬',
                    camp : '汉',
                    arms : '骑',
                    red : 0,
                    cost : 2,
                    att : 2, 
                    level:3,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (106).jpg'),
                    }
                },
                {
                    id:10601,
                    name : 'sp蔡文姬',
                    camp : '汉',
                    arms : '步',
                    red : 0,
                    cost : 2,
                    att : 2, 
                    level:3,
                    sign : 'sp',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (106).jpg'),
                    }
                },
                


                //侍卫
                {
                    id:20000,
                    name : '侍卫',
                    camp : '群',
                    arms : '骑',
                    red : 0,
                    cost : 10,
                    att : 3, 
                    level:2,
                    sign : 'none',
                    img:{
                        normal:require('../../assets/warrior_cards_normal/warrior (1000).jpg'),
                    }
                },
                
                


                
                
                   
                
                
                
                
               
            ]
        }
    }
}
export default warriors