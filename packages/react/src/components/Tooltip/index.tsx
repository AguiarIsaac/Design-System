import { Arrow, TooltipContainer } from "./styles";

export interface TooltipProps {
  date: string,
  disponibility: boolean
}

export function Tooltip({date, disponibility}: TooltipProps) {

  return (
    <TooltipContainer>
      {disponibility && <span>{date} - Disponivel</span>}
      {!disponibility && <span>{date} - Indisponivel</span>}
      <Arrow />
    </TooltipContainer>
  )
}