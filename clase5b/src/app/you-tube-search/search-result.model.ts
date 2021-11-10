/**Estructura con los datos de un vídeo */
export class SearchResultModel {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

    constructor(obj?: any) {
        this.id = obj?.id;
        this.title = obj?.title;
        this.description = obj?.description;
        this.thumbnailUrl = obj?.thumbnailUrl;
        if (obj?.videoUrl)
            this.videoUrl = obj.videoUrl;
        else
            this.videoUrl = `https://www.youtube.com/watch?v=${this.id}`;
    }
}