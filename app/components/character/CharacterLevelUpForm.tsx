import { Link, useParams, useTransition } from 'remix'

import { ICharacter } from '~/model/Character/CharacterType'

interface CharacterLevelUpFormProps {
  id?: string
  progression?: ICharacter['progression']
}

export default function CharacterLevelUpForm({
  id,
  progression,
}: CharacterLevelUpFormProps) {
  const transition = useTransition()

  const { characterName } = useParams()

  return (
    <fieldset disabled={transition.state === 'submitting'}>
      <input type="hidden" name="id" value={id} />
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Ascension
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="level"
                className="block text-sm font-medium text-gray-700"
              >
                Character Level
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="level"
                  defaultValue={progression?.level ?? 1}
                  min={1}
                  max={90}
                  id="level"
                  autoComplete="off"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="ascension"
                className="block text-sm font-medium text-gray-700"
              >
                Character Ascension
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="ascension"
                  defaultValue={progression?.ascension ?? 0}
                  min={0}
                  max={6}
                  id="ascension"
                  autoComplete="off"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Talent
            </h3>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="normal"
                className="block text-sm font-medium text-gray-700"
              >
                Normal Attack
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="normal"
                  defaultValue={progression?.talent[0] ?? 1}
                  min={1}
                  max={10}
                  id="normal"
                  autoComplete="off"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="skill"
                className="block text-sm font-medium text-gray-700"
              >
                Elemental Skill
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="skill"
                  defaultValue={progression?.talent[1] ?? 1}
                  min={1}
                  max={13}
                  id="skill"
                  autoComplete="off"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="burst"
                className="block text-sm font-medium text-gray-700"
              >
                Elemental Burst
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="burst"
                  defaultValue={progression?.talent[2] ?? 1}
                  min={1}
                  max={13}
                  id="burst"
                  autoComplete="off"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <Link
            to={`/character/${characterName}`}
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {transition.submission ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </fieldset>
  )
}
