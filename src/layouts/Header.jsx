import logo from '../assets/images/logo/logo.svg'

const Header = () => {
    return (
        <header className="manage-hd">
            <a href="#main-content" className="skip-nav">메인 바로가기</a>
            <div className="manage-top-hd">
                <div className="btns-wrap">
                    <span className="user-name">React 컴포넌트 가이드</span>
                </div>
            </div>
            <div className="manage-left-hd">
                <button 
                    type="button" 
                    className="btn-gnb-icon tab-show"
                    onClick={(e) => {
                        let leftHd = e.target.parentElement
                        leftHd.classList.toggle('tab-active');
                    }}
                >
                    <span className="voice-only">메뉴 보기</span>
                </button>
                <h1 className="manage-logo-wrap">
                    <a href="/"><img src={logo} alt="회사 로고"/></a>
                    <a href="/" className="desc"><span>회사이름</span></a>
                </h1>
                <nav className="manage-gnb scroll-custom">
                    <div className="manage-onedap-wrap">
                        <a href="http://localhost:5173/form" className="nav-ttl">Form</a>
                    </div>
                    <div className="manage-onedap-wrap">
                        <a href="http://localhost:5173/title" className="nav-ttl">Title</a>
                    </div>
                    <div className="manage-onedap-wrap">
                        <a href="http://localhost:5173/modal" className="nav-ttl">Modal</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header