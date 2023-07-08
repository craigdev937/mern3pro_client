import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { APISlice } from "./APISlice";

export const Reducer = configureStore({
    reducer: {
        [APISlice.reducerPath]: APISlice.reducer,
    },          // gDM = getDefaultMiddleware
    middleware: (gDM) => gDM().concat(APISlice.middleware),
});

setupListeners(Reducer.dispatch);



