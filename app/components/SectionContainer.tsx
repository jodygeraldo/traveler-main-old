import clsx from 'clsx'

type SectionProps = {
  title: string
  hideTitle?: boolean
}

function lowerKebabCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export default function SectionContainer({
  title,
  hideTitle,
  children,
}: SectionProps & { children: React.ReactNode }) {
  return (
    <section aria-labelledby={`${lowerKebabCase(title)}-heading`}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        {hideTitle ? (
          <span className="sr-only" id={`${lowerKebabCase(title)}-heading`}>
            {title}
          </span>
        ) : null}
        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
          {hideTitle ? null : (
            <div>
              <h2
                id={`${lowerKebabCase(title)}-heading`}
                className={clsx(
                  hideTitle && 'sr-only',
                  'text-lg font-medium leading-6 text-gray-900'
                )}>
                {title}
              </h2>
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  )
}
