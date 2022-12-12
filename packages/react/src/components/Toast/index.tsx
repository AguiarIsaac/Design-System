import { X } from "phosphor-react"
import { TextElement, ToastContainer } from "./styles"

export interface ToastProps {
  date: string,
  status: string
}

export function Toast({date, status}: ToastProps) {
  
  return (
    <ToastContainer>
      <TextElement>
        <span>Agendamento {status}</span>
        <small>{date}</small>
      </TextElement>

      <button type="button">
        <X size={18}/>
      </button>
    </ToastContainer>
  )
}