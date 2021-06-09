export interface Itrack {
    key: string,
    title: string,
    subtitle: string,
    images: {
        coverart: string
    }
    artistId: [{
        id: string
    }],
    url: string,
}
