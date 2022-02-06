import { DocumentIcon } from '@heroicons/react/outline'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { Link } from 'remix'

export default function CharacterTrackerEmpty() {
  return (
    <div className="text-center">
      <DocumentIcon className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        No characters Tracked
      </h3>

      <div className="mt-6">
        <Link
          to="/character"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Character List
          <ArrowNarrowRightIcon className="h-5 w-5 ml-3 -mr-1" />
        </Link>
      </div>
    </div>
  )
}
