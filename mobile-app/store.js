export default {
  //https://github.com/Tencent/westore
  data: {
    address: [
      { id: 1, text: "我的家", province:"陕西", city:"西安" },
      { id: 2, text: "北京的家", province: "北京", city: "东城区" },
    ],
    maxid:3
  },
  saveAddress(val){
    if(val.id){
      let item = this.data.address.find(x => x.id == val.id);
      if (item) {
        item.province = val.province;
        item.city = val.city;
      }
    } else {
      val.id = this.data.maxid++;
      this.data.address.push(val);
    }
    this.update();
  },
  deleteAddress(id){
    this.data.address.splice(this.data.address.findIndex(x=>x.id == id));
  }
}