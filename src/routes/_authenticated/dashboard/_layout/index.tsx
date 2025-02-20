import { Dashboard } from '@/components/dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard />
}
