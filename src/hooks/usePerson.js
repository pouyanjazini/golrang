import { useEffect } from "react"
import { getPerson } from "../redux/actions/person"
import { useDispatch, useSelector } from "react-redux"

export function usePerson (id) {
  const person = useSelector(state => state.person)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPerson(id))
  }, [])

  return person
}
