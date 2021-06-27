import { TypographyNextAnchor } from '../../typography/anchor'
import Date from '../../date'
import { VFC } from 'react'

export type dateListItemsProp = { url: string; title: string; date: string }
export const DateListItems: VFC<{ items: dateListItemsProp[] }> = ({ items }) => {
  return (
    <ul>
      {items.map(({ date, title, url }, index) => (
        <DateListItem key={index} date={date} title={title} url={url} />
      ))}
    </ul>
  )
}

type dateListItemProp = { url: string; title: string; date: string }
const DateListItem: VFC<dateListItemProp> = ({ url, title, date }) => (
  <li className="text-lg mb-5 ">
    <TypographyNextAnchor href={url}>{title}</TypographyNextAnchor>
    <br />
    <small className="text-gray-400 text-sm">
      <Date dateString={date} />
    </small>
  </li>
)
