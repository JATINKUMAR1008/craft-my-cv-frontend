import { Editor } from '@/components/editor'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/editor/$/resumeId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Editor/>
}
