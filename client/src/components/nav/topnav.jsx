import './nav.css'
import { createSignal } from "solid-js"
import { useLocation, useNavigate } from '@solidjs/router';

function TopNav() {

    const navigate = useNavigate()
    const location = useLocation();

    let selector;
    const [page, setPage] = createSignal(0)

    const changePage = (p, page) => {
        setPage(p)
        selector.style.top = `${p * 50}px`
        navigate(page)
    }

    return (
        <>
            <div class='topNav'>
                <div class='logo'>
                    <p>SimpCraft</p>
                </div>

                <div class='links'>
                    <div class='selector' ref={selector}/>

                    <div class={'link ' + (location.pathname === '/' ? 'active' : '')} onclick={() => changePage(0, '/')}>
                        <p>Blog</p>
                    </div>

                    <div class={'link ' + (location.pathname === '/earn' ? 'active' : '')}onclick={() => changePage(1, '/earn')}>
                        <p>Wiki</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopNav;
