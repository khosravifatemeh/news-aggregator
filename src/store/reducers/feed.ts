import { createSlice } from "@reduxjs/toolkit";
import { Author, Category, NewsItem, Source } from "../../core/interfaces/NewsInterface";
import { toggleObjectByAttribute } from "../../utils/array";
interface Filter{
  categories: Category[],
    sources: Source[],
    authors: Author[],
}
interface FeedState {
  articles: NewsItem[];
  selectedFilters:Filter;
  loading: boolean;
  showBadge: boolean;
  error: string | null;
}

const initialState: FeedState = {
  articles: [],
  selectedFilters:{
    authors:[],
    categories:[],
    sources:[]
  },
  loading: false,
  showBadge: false,
  error: null,
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setBadge(state, action) {
      state.showBadge = action.payload;
    },
    setSelectedAuthors(state,action){
      toggleObjectByAttribute(state.selectedFilters.authors,"id",action.payload)
    },
    setSelectedCategories(state,action){
      toggleObjectByAttribute(state.selectedFilters.categories,"id",action.payload)
    },
    setCategories(state,action){
      state.selectedFilters.categories=[...action.payload]
    },
    setSources(state,action){
      state.selectedFilters.sources=[...action.payload]
    },
    setAuthors(state,action){
      state.selectedFilters.authors=[...action.payload]
    },
    setSelectedSources(state,action){
      toggleObjectByAttribute(state.selectedFilters.sources,"id",action.payload)
  
    }
  }
  
});
export const { setBadge, setSelectedAuthors,setSelectedCategories,setSelectedSources,setCategories,setAuthors,setSources } = feedSlice.actions;

export default feedSlice.reducer;
