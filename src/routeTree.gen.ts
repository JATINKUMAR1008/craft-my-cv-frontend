/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as GettingStartedIndexImport } from './routes/getting-started/index'
import { Route as DashboardLayoutImport } from './routes/dashboard/_layout'
import { Route as DashboardLayoutIndexImport } from './routes/dashboard/_layout/index'
import { Route as DashboardLayoutResumesRouteImport } from './routes/dashboard/_layout/resumes/route'

// Create Virtual Routes

const DashboardImport = createFileRoute('/dashboard')()

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const GettingStartedIndexRoute = GettingStartedIndexImport.update({
  id: '/getting-started/',
  path: '/getting-started/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardLayoutRoute = DashboardLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardLayoutIndexRoute = DashboardLayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const DashboardLayoutResumesRouteRoute =
  DashboardLayoutResumesRouteImport.update({
    id: '/resumes',
    path: '/resumes',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/_layout': {
      id: '/dashboard/_layout'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLayoutImport
      parentRoute: typeof DashboardRoute
    }
    '/getting-started/': {
      id: '/getting-started/'
      path: '/getting-started'
      fullPath: '/getting-started'
      preLoaderRoute: typeof GettingStartedIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/_layout/resumes': {
      id: '/dashboard/_layout/resumes'
      path: '/resumes'
      fullPath: '/dashboard/resumes'
      preLoaderRoute: typeof DashboardLayoutResumesRouteImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/_layout/': {
      id: '/dashboard/_layout/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardLayoutIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
  }
}

// Create and export the route tree

interface DashboardLayoutRouteChildren {
  DashboardLayoutResumesRouteRoute: typeof DashboardLayoutResumesRouteRoute
  DashboardLayoutIndexRoute: typeof DashboardLayoutIndexRoute
}

const DashboardLayoutRouteChildren: DashboardLayoutRouteChildren = {
  DashboardLayoutResumesRouteRoute: DashboardLayoutResumesRouteRoute,
  DashboardLayoutIndexRoute: DashboardLayoutIndexRoute,
}

const DashboardLayoutRouteWithChildren = DashboardLayoutRoute._addFileChildren(
  DashboardLayoutRouteChildren,
)

interface DashboardRouteChildren {
  DashboardLayoutRoute: typeof DashboardLayoutRouteWithChildren
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardLayoutRoute: DashboardLayoutRouteWithChildren,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/dashboard': typeof DashboardLayoutRouteWithChildren
  '/getting-started': typeof GettingStartedIndexRoute
  '/dashboard/resumes': typeof DashboardLayoutResumesRouteRoute
  '/dashboard/': typeof DashboardLayoutIndexRoute
}

export interface FileRoutesByTo {
  '/dashboard': typeof DashboardLayoutIndexRoute
  '/getting-started': typeof GettingStartedIndexRoute
  '/dashboard/resumes': typeof DashboardLayoutResumesRouteRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/dashboard/_layout': typeof DashboardLayoutRouteWithChildren
  '/getting-started/': typeof GettingStartedIndexRoute
  '/dashboard/_layout/resumes': typeof DashboardLayoutResumesRouteRoute
  '/dashboard/_layout/': typeof DashboardLayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/dashboard'
    | '/getting-started'
    | '/dashboard/resumes'
    | '/dashboard/'
  fileRoutesByTo: FileRoutesByTo
  to: '/dashboard' | '/getting-started' | '/dashboard/resumes'
  id:
    | '__root__'
    | '/dashboard'
    | '/dashboard/_layout'
    | '/getting-started/'
    | '/dashboard/_layout/resumes'
    | '/dashboard/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  DashboardRoute: typeof DashboardRouteWithChildren
  GettingStartedIndexRoute: typeof GettingStartedIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  DashboardRoute: DashboardRouteWithChildren,
  GettingStartedIndexRoute: GettingStartedIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/dashboard",
        "/getting-started/"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard",
      "children": [
        "/dashboard/_layout"
      ]
    },
    "/dashboard/_layout": {
      "filePath": "dashboard/_layout.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/_layout/resumes",
        "/dashboard/_layout/"
      ]
    },
    "/getting-started/": {
      "filePath": "getting-started/index.tsx"
    },
    "/dashboard/_layout/resumes": {
      "filePath": "dashboard/_layout/resumes/route.tsx",
      "parent": "/dashboard/_layout"
    },
    "/dashboard/_layout/": {
      "filePath": "dashboard/_layout/index.tsx",
      "parent": "/dashboard/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
