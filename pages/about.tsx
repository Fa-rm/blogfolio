// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next'
import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { MDXComponents } from '@/components/MDXComponents'

import usesStack from '@/data/usesStack'
import Link from 'next/link'

const DEFAULT_LAYOUT = 'AuthorLayout'

export const getStaticProps = async () => {
  const author = allAuthors.find((p) => p.slug === 'default')
  return { props: { author } }
}

export default function About({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <MDXLayoutRenderer
        layout={author.layout || DEFAULT_LAYOUT}
        content={author}
        MDXComponents={MDXComponents}
      />
      <div className="mx-auto max-w-6xl divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5"></div>
        <div className="container py-12">
          <div className="flex flex-row flex-wrap">
            {usesStack.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group mb-4 w-full cursor-pointer p-6 backdrop-filter transition duration-200 hover:rounded-xl hover:bg-gray-100 hover:bg-opacity-40 dark:hover:bg-gray-500 dark:hover:bg-opacity-40 md:w-1/2"
              >
                <div className="flex items-center justify-start">
                  <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50 ">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-12 w-12 stroke-current text-center align-middle leading-6 text-gray-700 dark:text-gray-50"
                    >
                      <path d="M4 17L10 11 4 5" />
                      <path d="M12 19L20 19" />
                    </svg>
                  </div>
                  <div className="flex flex-col p-3">
                    <h3 className="truncate text-sm font-bold leading-5 text-gray-800 dark:text-white sm:text-base lg:text-base">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                      {d.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
