import {
  INCREMENT,
  INCREMENT2,
  DECREMENT,
  DECREMENT2,
  INCREMENT_NUMBER,
  DECREMENT_NUMBER,
} from "./actionTypes";

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function incNumber(number) {
  return {
    type: INCREMENT_NUMBER,
    payload: number
  }
}

export function decNumber(number) {
  return {
    type: DECREMENT_NUMBER,
    payload: number
  }
}

export function increment2() {
  return {
    type: INCREMENT2
  }
}

export function decrement2() {
  return {
    type: DECREMENT2
  }
}