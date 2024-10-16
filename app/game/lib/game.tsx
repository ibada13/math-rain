
const InitGame = (wave:number) => {
    const rains :JSX.Element[] = []
    for (var i = 0; i < 5;i++) { 
        rains.push(
            <div id="rains" className={`bg-blue-500 rounded-md p-2 m-2 wave-${wave} -top-20`}>rains</div>
        )
    }
    return rains;
}
 
export {InitGame}