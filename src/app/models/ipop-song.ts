
export interface IpopSong {
    key: string,
    title: string,
    subtitle: string,
    images: {
        coverart: string
    }
    artists: [{
        id: string
    }],
    url: string,
}