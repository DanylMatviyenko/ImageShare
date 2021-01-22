import React from 'react';

const DataPhotosContext = React.createContext({} as IContext);

interface IPhoto {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

interface IContextDataState {
    photos: IPhoto[] | [];
    isDataLoaded: boolean
}
interface IContext {
    isDataLoaded: boolean;
    photos: IPhoto[] | [];
    updatePhotos: IUpdatePhotos;
}
interface IUpdatePhotos {
    (page: number): void
}
export class DataPhotosProvider extends React.Component<{}, IContextDataState> {
    state: IContextDataState = {
        photos: [],
        isDataLoaded: false
    }
    readonly BASE_URL = 'https://jsonplaceholder.typicode.com/photos?';
    readonly PHOTOS_LIMIT = 20;

    updatePhotos = (page: number): void => {
        this.getPhotos(page)
            .then(response => response.json())
            .then(photosList => {
                if (page === 1) {
                    this.setState({
                        photos: this.state.photos.concat(photosList),
                        isDataLoaded: true
                    });
                }else {
                    this.setState({
                        photos: this.state.photos.concat(photosList),
                    });
                }
            })
            .catch((error => Promise.reject(error.message)));
    }
    getPhotos = (page: number): Promise<any> => {
        return fetch(`${this.BASE_URL}_page=${page}&_limit=${this.PHOTOS_LIMIT}`);
    }
    render() {
        const { children } = this.props;
        const { photos, isDataLoaded } = this.state;
        const { updatePhotos } = this;

        return (
            <DataPhotosContext.Provider value={{
                isDataLoaded,
                photos,
                updatePhotos
            }}>
                { children }
            </DataPhotosContext.Provider>
        );
    }
}

export default DataPhotosContext

