function avoidingFire(...arr){
    arr2=[];
    arr.forEach(element => {
        arr2=arr2.concat(element);
    });
    max=arr2.reduce((x,val)=>{
        if(x<val)return val;
        return x;
    })    
    tot=0;
    arr2.forEach(x=>{if(x==max)tot++})
    return tot
}
test('blow candles', () => {
    expect(avoidingFire([1,2,3,4,5,6])).toBe(1);
    expect(avoidingFire([6,5,4,3,2,1,2,3,4,5,6])).toBe(2);
    expect(avoidingFire([2,2,2,1])).toBe(3);
    expect(avoidingFire([2,2,2,1], [6,9,2], [7,7,1,2], [8,8,1,7,3])).toBe(1);
  })