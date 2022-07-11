<template>
    <div class="barrages-drop">
        <vue-baberrage
                :isShow="barrageIsShow"
                :barrageList="barrageList"
                :maxWordCount="maxWordCount"
                :throttleGap="throttleGap"
                :loop="barrageLoop"
                :boxHeight="boxHeight"
                :messageHeight="messageHeight"
        >
        </vue-baberrage>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {vueBaberrage, MESSAGE_TYPE} from 'vue-baberrage';

    Vue.use(vueBaberrage);

    export default {
        name: 'Barrages',
        data() {
            return {
                msg: '马优晨就是个辣鸡~',
                barrageIsShow: true,
                messageHeight: 3,
                boxHeight: 150,
                barrageLoop: true,
                maxWordCount: 3,
                throttleGap: 5000,
                barrageList: []
            };
        },
        mounted() {
            this.addToList();
        },
        methods: {
            addToList() {
                let list = [
                    {
                        id: 1,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 3,
                    },
                ];
                list.forEach((v) => {
                    this.barrageList.push({
                        id: v.id,
                        avatar: v.avatar,
                        msg: v.msg,
                        time: v.time,
                        type: MESSAGE_TYPE.NORMAL,
                        barrageStyle: v.barrageStyle
                    });
                });
            }
        }
    };
</script>

