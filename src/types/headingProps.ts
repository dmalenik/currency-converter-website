// TODO: implement advanced type for range
const range = [1, 2, 3, 4, 5, 6] as const
type Level = (typeof range)[number]

export type HeadingProps = {
  title: string
  level: Level
  description?: string
}
