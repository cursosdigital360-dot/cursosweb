import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Odontología Digital 360'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        Odontología Digital 360
      </div>
    ),
    {
      ...size,
    }
  )
}
