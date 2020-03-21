class EventEmitter{
    constructor(){
      this.events={}
      this.hash={}
    }

    on(event,listener){
      if (this.events[event]){
        this.events[event].push(listener)
      } else {
        this.events[event]=[listener]
      }
    }

    off(event,listener){
        // if (this.hash[listener]){
        //     listener=this.hash[listener]
        // }
        this.hash[listener]=undefined
        if (this.events[event]){
            this.events[event]=this.events[event].filter(item=>{return item !=listener })
          }
    }

    once(event,listener){
        const fn = () => {
            listener() 
            this.off(event, fn) 
          }
          this.on(event,fn)
    }

    emit(event,...rest){
 
        if (this.events[event]){
            this.events[event].forEach(item=>{
                item.apply(this,rest)
            })
          }
  
    }
}

module.exports=EventEmitter