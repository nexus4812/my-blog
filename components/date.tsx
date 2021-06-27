import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }): JSX.Element {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy年MM月dd日')}</time>
}
