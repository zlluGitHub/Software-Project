const state = {
    oneBugIsShow: false,
    solveBugIsShow: false,
    detailsIsShow: false,
}
const mutations = {
    setOneBugIsShow(state, data) {
        state.oneBugIsShow = data;
    },
    setSolveBugIsShow(state, data) {
        state.solveBugIsShow = data;
    },
    setDetailsIsShow(state, data) {
        console.log(data);
        
        state.detailsIsShow = data;
    }
}
//   const actions = {
//     setArtile(context, data) {
//       context.commit('setArtile', data);
//     }
//   }
//   const getters = {
//     //获文章取条获件分页列表
//     getArticleReplyPage(state) {
//       return function (pageNo, pageSize) {
//         let list = 0;
//         return list;
//       }
//     }
//   }
export default {
    state,
    // actions,
    mutations,
    // getters
}
