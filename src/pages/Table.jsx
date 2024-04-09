import "../assets/scss/components.scss";
import ManageTable from "../components/table/ManageTable";
import ManageTatleTable from "../components/table/ManageTatleTable";
import Breadcrumb from "../components/typo/Breadcrumb";
import PageTitle from "../components/typo/PageTitle";

const Table = () => {
  return (
    <>
      <section>
        <PageTitle>테이블 예제모음</PageTitle>
        <Breadcrumb>HOME &lt; 테이블 예제모음</Breadcrumb>
      </section>

      <article className="component-container">
        <h2 className="component-ttl">테이블</h2>
        <p className="component-desc">
          테이블은 두가지 이유로 컴포넌트화 하지 않습니다.
        </p>
        <p className="component-desc">1 데이터 연동</p>
        <p className="component-desc">2 테이블마다 다른 셀 내용</p>
        <p className="component-desc">
          다만, 프로젝트에서 사용시 해당 페이지에 복사 / 붙여넣기하기 편리하도록
          컴포넌트로 만들었습니다.
        </p>
      </article>

      <section className="component-container">
        <h3 className="component-sub-ttl">기본 테이블</h3>

        <ManageTable />
      </section>

      <div className="component-container">
        <h3 className="component-sub-ttl">제목이 있는 테이블</h3>

        <ManageTatleTable />
      </div>
    </>
  );
};

export default Table;
