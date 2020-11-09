import Queue from "./Queue"
export default (list:Array<any> = [],number:number)=>{
    const eliminatedList = [];
    const queue =  new Queue();
    for(const item of list){
        queue.enqueue(item);
    }
    while(queue.size()>1){
        for(let i =0;i<number;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminatedList,
        winner:queue.dequeue()
    }
}