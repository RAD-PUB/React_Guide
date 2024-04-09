import '../assets/scss/components.scss'
import Breadcrumb from '../layouts/typo/Breadcrumb'
import PageTitle from '../layouts/typo/PageTitle'

const Table = () => {
    return (
        <>
        <section>
            <PageTitle>테이블 예제모음</PageTitle>
            <Breadcrumb>HOME &lt; 테이블 예제모음</Breadcrumb>
        </section>

        <article className="component-container">
            <h2 className="component-ttl">테이블</h2>
            <p className="component-desc">테이블은 데이터 연동으로 컴포넌트화 하지 않습니다.</p>
            <p className="component-desc">프로젝트에서 사용시, 해당 페이지에 복사 / 붙여넣기하기 편리하도록 컴포넌트로 만들었습니다.</p>
        </article>
        </>
    )
}

export default Table