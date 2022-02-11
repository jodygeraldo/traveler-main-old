import { useTransition } from 'remix'

export default function useOptimisticView(view: 'grid' | 'list') {
  const transition = useTransition()
  const formView = transition.submission?.formData.get('view') as
    | 'grid'
    | 'list'
    | undefined
    | null
  const optimisticView = formView ?? view

  return optimisticView
}
