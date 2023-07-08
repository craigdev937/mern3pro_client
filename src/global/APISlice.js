import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = "http://localhost:9000";

export const APISlice = createApi({
    reducerPath: "APISlice",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET"
            }),
            providesTags: ["Products"]
        }),
    }),
});


