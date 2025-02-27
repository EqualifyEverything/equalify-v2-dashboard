import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/audits/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/audits/test"!</div>
}
