import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function FormatTimePassed(time: string) {
  return formatDistanceToNow(new Date(time), { addSuffix: true, locale: ptBR })
}