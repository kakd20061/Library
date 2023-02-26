export interface Epoch {
    url: string;
    href: string;
    name: string;
    slug: string;
}

export interface Genre {
    url: string;
    href: string;
    name: string;
    slug: string;
}

export interface Kind {
    url: string;
    href: string;
    name: string;
    slug: string;
}

export interface Author {
    url: string;
    href: string;
    name: string;
    slug: string;
}

export interface FragmentData {
    title: string;
    html: string;
}

export interface Child {
    kind: string;
    full_sort_key: string;
    title: string;
    url: string;
    cover_color: string;
    author: string;
    cover: string;
    epoch: string;
    href: string;
    has_audio: boolean;
    genre: string;
    simple_thumb: string;
    slug: string;
    cover_thumb: string;
    liked?: any;
}

export interface BookDetails {
    title: string;
    url: string;
    language: string;
    epochs: Epoch[];
    genres: Genre[];
    kinds: Kind[];
    authors: Author[];
    translators: any[];
    fragment_data: FragmentData;
    children: Child[];
    parent?: any;
    preview: boolean;
    epub: string;
    mobi: string;
    pdf: string;
    html: string;
    txt: string;
    fb2: string;
    xml: string;
    media: any[];
    audio_length: string;
    cover_color: string;
    simple_cover: string;
    cover_thumb: string;
    cover: string;
    simple_thumb: string;
    isbn_pdf: string;
    isbn_epub: string;
    isbn_mobi: string;
}