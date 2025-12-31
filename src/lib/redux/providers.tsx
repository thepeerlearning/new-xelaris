"use client"

import React from "react"
import { Provider } from "react-redux"
import type { Persistor } from "redux-persist"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

import { makeStore } from "./store"

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  const store = React.useMemo(() => makeStore(), [])
  const persistor: Persistor = React.useMemo(() => persistStore(store), [store])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
