import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 mt-2 inline-block rounded-full border border-black px-2 py-1 text-sm font-medium uppercase hover:border-primary-500 hover:text-primary-500 dark:border-white dark:text-white dark:hover:border-primary-500 dark:hover:text-primary-500"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
