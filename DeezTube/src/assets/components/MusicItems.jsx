import MusicCard from "./MusicCard"

function MusicItems ({musicList}) {
    return (
        <div>   
        {musicList.map((song) => (
            <MusicCard key={song.title} title={song.title} 
            autor={song.autor} url={song.url}/>
        ))}
       </div> 
    )
}

export default MusicItems

/*MusicCard key={song.title} title={song.title} 
            autor={song.autor} url={song.url}/>*/