export const state = () => ({
  userData:{}
})

export const mutations = {
  sessionActive (userData){
    this.state.userData = userData
  }
}
