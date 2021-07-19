import { VFC } from 'react'
import { ProfileIcon, sm } from './profileIcon'
import Date from '../../date'
import { TypographyNextAnchor } from '../../typography/anchor'

type props = { date: string; name: string }

export const Author: VFC<props> = ({ date, name }) => {
  return (
    <div className="flex mt-5 mb-5">
      <ProfileIcon imageType={sm} />
      <div className="ml-3">
        <div>
          <TypographyNextAnchor href="/profile">{name}</TypographyNextAnchor>
        </div>
        <div className="text-gray-800 mt-1 text-sm">
          <Date dateString={date} />
        </div>
      </div>
    </div>
  )
}
