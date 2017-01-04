
//runs fetch to get embeddable url for requested song

export function GetSongUrl(song, artist) {
    return fetch("https://www.googleapis.com/youtube/v3/search?&part=snippet&q="+song+artist+"lyrics&type=video&key=AIzaSyCqvnsIkcSWqsflBTuYCIj0v5FIpYBTrYs")
    .then(function(res) {
      return res.json() ;
    }).then(function(json) {
        /* return "https://www.youtube.com/embed/watch?v="+json.items[0].id.videoId+"?autoplay=1" */
        return "http://www.youtube.com/embed/"+json.items[0].id.videoId+"?autoplay=1&start=40"
    });
}
