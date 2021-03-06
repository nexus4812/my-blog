import React, { VFC } from 'react'

type props = {
  imageType: imageType
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> // <img>

type imageType = {
  src: string
  wight: number
  height: number
}

export const lg: imageType = {
  src: '/images/profile.jpg',
  wight: 100,
  height: 100
}

export const sm: imageType = {
  src: '/images/profile.jpg',
  wight: 40,
  height: 40
}

export const ProfileIcon: VFC<props> = ({ imageType, ...props }) => {
  return (
    <img // eslint-disable-line
      src={imageType.src}
      width={imageType.wight}
      height={imageType.height}
      alt="profile_image"
      className="rounded-full cursor-pointer"
      {...props}
    />
  )
}
