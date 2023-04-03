import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_newmodel_list = createAsyncThunk(
  "newmodels/api_v1_newmodel_list",
  async payload => {
    const response = await apiService.api_v1_newmodel_list(payload)
    return response.data
  }
)
export const api_v1_newmodel_create = createAsyncThunk(
  "newmodels/api_v1_newmodel_create",
  async payload => {
    const response = await apiService.api_v1_newmodel_create(payload)
    return response.data
  }
)
export const api_v1_newmodel_retrieve = createAsyncThunk(
  "newmodels/api_v1_newmodel_retrieve",
  async payload => {
    const response = await apiService.api_v1_newmodel_retrieve(payload)
    return response.data
  }
)
export const api_v1_newmodel_update = createAsyncThunk(
  "newmodels/api_v1_newmodel_update",
  async payload => {
    const response = await apiService.api_v1_newmodel_update(payload)
    return response.data
  }
)
export const api_v1_newmodel_partial_update = createAsyncThunk(
  "newmodels/api_v1_newmodel_partial_update",
  async payload => {
    const response = await apiService.api_v1_newmodel_partial_update(payload)
    return response.data
  }
)
export const api_v1_newmodel_destroy = createAsyncThunk(
  "newmodels/api_v1_newmodel_destroy",
  async payload => {
    const response = await apiService.api_v1_newmodel_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const newmodelsSlice = createSlice({
  name: "newmodels",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_newmodel_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmodel_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmodel_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmodel_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmodel_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmodel_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmodel_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_newmodel_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_newmodel_list,
  api_v1_newmodel_create,
  api_v1_newmodel_retrieve,
  api_v1_newmodel_update,
  api_v1_newmodel_partial_update,
  api_v1_newmodel_destroy,
  slice: newmodelsSlice
}
