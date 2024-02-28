import { createReducer } from '@reduxjs/toolkit'

export const people = createReducer([], builder => {
  builder.addCase('PEOPLE', (state, { payload }) => payload)
})

export const person = createReducer({}, builder => {
  builder.addCase('PERSON', (state, { payload }) => payload)
})
