
function VideoCard({videoList}) {
    return (
        <div>
        {videoList.map((video) =>
            <iframe width="350" height="300" 
            key={video.url}
            src={video.src}
            title={video.title}
            frameborder={video.frameBorder}
            allow={videoList.allow} 
            allowFullScreen></iframe>
            )} 
        </div>
    )
}

export default VideoCard