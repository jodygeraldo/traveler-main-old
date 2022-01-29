import { Box, CloseButton, Image } from '@mantine/core'
import { FC, MouseEventHandler } from 'react'

type Props = {
  value: string
  label: string
  filterFor: string
  onRemove: MouseEventHandler<HTMLButtonElement>
}

const CharacterVisionFilterLabel: FC<Props> = ({
  value,
  label,
  filterFor,
  onRemove,
  ...others
}) => {
  return (
    <div {...others}>
      <Box
        sx={theme => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          border: `1px solid ${theme.colors.gray[4]}`,
          paddingLeft: 10,
          borderRadius: 4,
        })}
      >
        <div style={{ marginRight: 10 }}>
          <Image
            width={15}
            height={15}
            fit="cover"
            src={`/assets/images/${filterFor}/${value.toLowerCase()}.png`}
          />
        </div>
        <div style={{ lineHeight: 1, fontSize: 12 }}>{label}</div>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  )
}

export default CharacterVisionFilterLabel
