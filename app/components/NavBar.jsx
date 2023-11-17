import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    data_test: 'nav-why-cypress'
},
    {
    label: 'Overview',
    path: '/overview'
,    data_test: 'nav-overview'
},
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    data_test: 'nav-fundamentals'
},
    {
        label: 'Forms',
        path: '/forms'
,        data_test: 'nav-forms'
    },
    {
        label: 'Examples',
        path: '/examples' ,
        data_test: 'nav-examples'
    },
    {
        label: 'Component',
        path: '/component', 
        data_test: 'nav-component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        data_test: 'nav-best-practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem dataTest={item.data_test} key={item.label} label={item.label} path={item.path} />
                ))
            }
        </ul>
    )
}