export interface Character {
    created: string
    episode: Array<string>
    gender: string
    id: number
    image: string
    location: {
        name: string,
        url: string
    }
    name: string
    origin: {
        name: string,
        url: string
    }
    species: string
    status: string
    type: string
    url: string
}

export interface Episode {
    air_date: string;
    characters: Array<string>;
    created: string;
    episode: string;
    id: number;
    name: string;
    url: string;
}

export interface KEYBOARD_OPTS {
    key: string;
    keyName: string;
    keyCode: number;
}

export interface useKeyboardKeyProps {
    keyMatch: KEYBOARD_OPTS;
    callback: () => void;
}