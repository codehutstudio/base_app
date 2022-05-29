import { useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import App from './App'
import { appRoutesAtom } from './AppState'
import { GeneralObject } from './AppTypes'
import Loading from './Components/Loading'
import { first, last, pipe } from './Utils'

const publicPages = import.meta.globEager(
    '/src/Pages/public/**/*.tsx'
)

export default function AppRouting() {
    const theme = useTheme()
    const setAppRoutes = useSetRecoilState(appRoutesAtom)
    const [routeConfigs, setRouteConfigs] = useState<GeneralObject | null>(null)
    useEffect(() => {
        if (publicPages) {
            const { routeConfigs, routeLinks } = genRoutes(publicPages)
            setAppRoutes(routeLinks)
            setRouteConfigs(routeConfigs)
        }
    }, [])
    
    if (routeConfigs === null) return <Loading type="bars" color={theme.palette.primary.main}/>
    return (
            <Routes>
                <Route path="/" element={<App />}>
                    {/* {generatePublicRoutes(publicPages)} */}
                    {routeConfigs !== null && renderRoutes(routeConfigs)}
                </Route>
            </Routes>
    )
}
function getRouteLinks(pages: any) {
    return Object.entries(pages).reduce((list: any[], [routeName,]) => {
        const routeParts = pipe(getBaseRoute, getRouteParts)(routeName)
        if (routeParts.length === 2) {
            list.push({ path: validatePathName(routeParts[0]), label: routeParts[0] })
        }
        return list
    }, [])
}
function genRoutes(pages: any) {
    const files = Object.entries(pages)
    const routeConfigs =
        files.reduce((map: { [key: string]: any }, [fileName, module]: [string, any]) => {

            const routeParts = getBaseRoute(fileName).split('/').slice(1)
            const isIndexRoute = last(routeParts) === 'index'
            const baseRoute = first(routeParts)
            const isParamRoute = last(routeParts).includes('[')

            if (isIndexRoute && routeParts.length === 1) {
                map.index = { module }
            }
            if (isIndexRoute && routeParts.length > 1) {
                baseRoute in map
                    ? map[baseRoute] = { index: { module }, children: map[baseRoute].children }
                    : map[baseRoute] = { index: { module }, children: [] }
            }
            if (!isIndexRoute && !isParamRoute) {
                const path = validatePathName(routeParts.slice(1)[0])
                baseRoute in map
                    ? map[baseRoute].children.push({ path, module, children: [] })
                    : map[baseRoute] = { children: [{ path, module, children: [] }] }
            }
            // Param Routes
            if (!isIndexRoute && isParamRoute) {
                const param = last(routeParts).replace('[', "").replace(']', "")
                const parentRouteName = `${param}s`
                if (baseRoute in map) {
                    const childIndex = map[baseRoute].children.findIndex((cr: any) => cr.module.default.name === parentRouteName)
                    const childRoute = map[baseRoute].children[childIndex]
                    childRoute.children.push({ path: `:${param.toLowerCase()}`, module, routeParts })
                    map[baseRoute].children[childIndex] = childRoute
                } else {
                    debugger
                }
            }
            return map
        }, {})
    const routeLinks = genRouteLinks(routeConfigs)
    return { routeConfigs, routeLinks }
}
function genRouteLinks(routeConfigs: GeneralObject) {
    const { index, ...rest } = routeConfigs
    const links = Object.entries(rest).reduce((list: any[], [name, { children }]: any) => {
        const route = children.length > 0
            ? { name, children: children.map(({ path }: any) => path) }
            : { name }
        list.push(route)
        return list
    }, [])
    return links
}
function renderRoutes(appRoutes: GeneralObject): any[] {
    const { index: indexRoute, ...rest } = appRoutes
    const mainRoute = renderIndexRoute({ key: 'index', routeCfg: indexRoute.module})
    const routes: any[] = Object.entries(rest).reduce((list: any[], [name, {index, children}]: any) => {
        if (children.length > 0) {
            const Element = index.module.default
            const result = (
                <Route key={name} path={makeUrlString(name)} element={<Element />}>
                    {children.map(renderRoute)}
                </Route>
            )
            list = [...list, result]
        } else {
            const result = renderComponenteRoute({ key: name, path: makeUrlString(name), routeCfg: index.module})
            list = [...list, result]
        }
        return list
    }, [])
    return [mainRoute, ...routes]
}
interface ChildRoute {
    path: string;
    module: GeneralObject;
    children: ChildRoute[]
}
function renderRoute({path, module, children}: ChildRoute ) {
    const Element = module.default
    const routePath = makeUrlString(path)
    return children 
    ? (<Route key={path} path={routePath} element={<Element />}>{children.map(renderRoute)}</Route>)
    : <Route key={path} path={routePath} element={<Element />} />
}
function generatePublicRoutes(pages: any) {
    const { routes, nestedRoutes } = Object.entries(pages).reduce(
        (map: any, [routeName, routeCfg], key: number) => {
            const routeParts = pipe(getBaseRoute, getRouteParts)(routeName)
            if (routeParts.length === 1) {
                map.routes.push(renderIndexRoute({ key, routeCfg }))
            } else {
                const base = routeParts[0]
                if (last(routeParts).includes('[')) {
                    map = addParamRoute({ key, routeParts, routeCfg }, map)
                } else {
                    base in map.nestedRoutes
                        ? map.nestedRoutes[base].children.push({ key, routeParts, routeCfg })
                        : map.nestedRoutes[base] = { key, routeParts, routeCfg, children: [] }
                }
            }
            return map
        }, { routes: [], nestedRoutes: {} }
    )

    return [...routes, ...renderNesteRoutes(nestedRoutes)]
}
function renderIndexRoute({ key, routeCfg }: { key: number | string, routeCfg: any }) {
    const Element = (routeCfg as any).default
    return <Route key={key} index element={<Element />} />
}
function renderComponenteRoute({ key, routeCfg, path }: { key: number, routeCfg: any, path: string }) {
    const Element = (routeCfg as any).default
    const url = validatePathName(path)
    return <Route path={url} key={key} element={<Element />} />
}
interface RouteConfig {
    key: number;
    routeCfg: {
        default: any;
        [key: string]: any;
    };
    routeParts: string[];
    children: RouteConfig[];
}
function renderNesteRoutes(cfg: { [key: string]: RouteConfig }) {
    return Object.entries(cfg).reduce((list: any[], [baseName, c]: [string, RouteConfig]) => {
        const { key, routeParts, routeCfg, children } = c
        if (children.length === 0) {
            const path = validatePathName(routeParts[0])
            list.push(renderComponenteRoute({ key, path, routeCfg }))
        } else {
            const Element = (routeCfg as any).default
            list.push(
                <Route key={key} path={validatePathName(baseName)} element={<Element />}>
                    {children.map((child: RouteConfig) => {
                        if (child.routeParts.includes('index')) {
                            return renderIndexRoute({ key: child.key, routeCfg: child.routeCfg })
                        } else {
                            debugger
                        }
                        return ''
                    })}
                </Route>
            )
        }
        return list
    }, [])
}
function addParamRoute(rc: any, list: any) {
    debugger
    return []
}
function renderRouteWithChildren(rc: RouteConfig) {

}
function getRouteParts(routeName: string) {
    return routeName.split('/').filter(x => x !== "")
}

function getBaseRoute(path: string) {
    return path.replace(
        /\/src\/Pages|\/public|\/protected|\.tsx$/g,
        ""
    )
}
function validatePathName(path: string) {
    const hasCapitalLetters = path.match(/([A-Z][a-z]+)/gm)
    return hasCapitalLetters ? camelCaseToUrl(path) : path.toLowerCase()
}

function camelCaseToUrl(path: string) {
    // Using positive look ahead
    const parts = path.split(/(?=[A-Z])/)
    return parts.map(a => a.toLowerCase()).join('-')
}
function makeUrlString(path: string): string {
    const name = path.match(/[A-Z][a-z]+/g)?.map(name => name.charAt(0).toLowerCase() + name.slice(1)).join('-')
    const url = name as string || path
    return url
}