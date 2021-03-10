<template>
    <div>
        <h1>Welcome to {{title}}!</h1>
        <input type="text" v-model="input"/> <!-- value 대신 v-model사용 -->
        <button type="button" @click="getData()">Get</button> <!-- onclick 대신 @click사용 -->
        <button type="button" @click="setData()">Set</button>
        <select class="form-control" v-model="region" @change="changeRegion()">
            <option v-for="(data,index) in option" :key="index" :value="data.v">{{data.t}}</option> 
            <!-- 리스트 형태 데이터는 v-for사용 -->
        </select>
        <table class="table" v-if="tableShow"> <!-- v-if 안의 조건이 만족되면 하위 속성을 랜더링 -->
                                                <!-- v-show 랜더링은 무조건 함, display:hidden -->
            <tr v-for="(data,index) in option" :key="index">
                <td>{{data.v}}</td>
                <td>{{data.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title: "Title",
            home: "Home",
            input: "input value",
            option: [
                {v: "s", t:"seoul"},
                {v: "j", t:"jeju"},
                {v: "g", t:"gimpo"}
            ],
            region: "g",
            tableShow: true,
        };
    },
    watch: { // 데이터 변경 모니터링, 데이터 변경 순간 동작
        input(){ // data의 key값(변수명)과 같은 메소드명 사용
            console.log(this.input);
        }
    },
    methods: {
        getData(){
            alert(this.input);
        },
        setData(){
            this.input = "SET Value";
        },
        changeRegion(){
            alert(this.region);
        }
    },
    /* =============== Vue Life Cycle ======================= */
    beforeCreate() {
        console.log("before create");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("before mount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        // console.log("before update");
    },
    updated() {
        // console.log("updated");
    },
    beforeDestroy() {
        console.log("before destroy");
    },
    destroyed() {
        console.log("destroyed");
    },
    /* ============================================================== */
}
</script>