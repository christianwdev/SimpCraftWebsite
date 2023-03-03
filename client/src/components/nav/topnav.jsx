import './nav.css'
import { createEffect } from "solid-js"
import { useLocation, useNavigate } from '@solidjs/router';

const pageEnum = {
    '': 0,
    '/wiki': 1,
}

function TopNav() {

    const navigate = useNavigate()
    const location = useLocation()
    let selector
    let links

    createEffect(() => {

        let linksArray = [].slice.call(links.children)
        if (!Array.isArray(linksArray)) { return }
        let children = linksArray.slice(1) // Ignore the first child, the selector
        
        let p = pageEnum[location.pathname] || 0
        let linkToHighlight = children[p]
        let prevLink = 0

        if (p !== 0) { prevLink = children[Math.max(0, p - 1)]?.offsetWidth || 0 }

        selector.style.width = linkToHighlight.offsetWidth + 'px'
        selector.style.left = `${prevLink + p * 50}px`

    })

    return (
        <>
            <div class='topNav'>
                <div class='logo'>
                    <p>SimpCraft</p>
                </div>

                <div class='links' ref={links}>
                    <div class='selector' ref={selector}/>

                    <div class={'link ' + (location.pathname === '/' ? 'active' : '')} onclick={() => navigate('/')}>
                        <p>Blog</p>
                    </div>

                    <div class={'link ' + (location.pathname === '/wiki' ? 'active' : '')}onclick={() => navigate('/wiki')}>
                        <p>Wiki</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopNav;
