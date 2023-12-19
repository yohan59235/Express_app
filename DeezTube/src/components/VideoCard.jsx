import style from "../styles/Video.module.css"

function VideoCard({videoList}) {
    return (
        <div>
        {videoList.map((video)=>
         <iframe key={video.url} width="400" height="300" 
         src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        )}
        </div>
    );
  }
export default VideoCard