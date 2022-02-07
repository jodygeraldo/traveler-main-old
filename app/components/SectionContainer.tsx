import { toLowerKebabCase } from '~/utils/string'

type SectionProps = {
  title: string
  hideTitle?: boolean
}

export default function SectionContainer({
  title,
  hideTitle,
  children,
}: SectionProps & { children: React.ReactNode }) {
  return (
    <section aria-labelledby={`${toLowerKebabCase(title)}-heading`}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        {hideTitle ? (
          <span className="sr-only" id={`${toLowerKebabCase(title)}-heading`}>
            {title}
          </span>
        ) : null}
        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
          {hideTitle ? null : (
            <div>
              <h2
                id={`${toLowerKebabCase(title)}-heading`}
                className="text-lg font-medium leading-6 text-gray-900"
              >
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
