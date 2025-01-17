import { DashboardV2Comp } from '@/components/dashboard_v2'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard_v2/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DashboardV2Comp/>
}
