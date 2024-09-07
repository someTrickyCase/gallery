const API_URL = "https://api.artic.edu/api/v1/artworks";

let pageLoaded = 0;

export const fetchInitialData = async (quantity: number = 12, page: number = 1) => {
  pageLoaded = quantity / 12;
  try {
    const request = await fetch(`${API_URL}?page=${page}&limit=${quantity}`);
    const response = await request.json();
    const data = response.data;
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchByScroll = async (quantity: number = 12, page: number = 1) => {
  pageLoaded += page;
  try {
    const request = await fetch(`${API_URL}?page=${pageLoaded}&limit=${quantity}`);
    const response = await request.json();
    const data = response.data;
    return data;
  } catch (e) {
    console.error(e);
  }
};

interface searchedItemType {
  api_link: string;
  api_model: string;
  id: number;
  is_boosted: boolean;
  thumbnail: {};
  timestamp: string;
  title: string;
  _score: number;
}

export const fetchBySearch = async (param: string) => {
  try {
    console.log("searching");
    const request = await fetch(
      `${API_URL}/search?q=${param}&query[term][is_public_domain]=true&limit=48`
    );
    const response = await request.json();
    const data = response.data;
    const links: string[] = [];
    data.map((item: searchedItemType) => {
      if (!item.api_link) return;
      links.push(item.api_link);
    });
    return links;
  } catch (e) {
    console.error(e);
  }
};
