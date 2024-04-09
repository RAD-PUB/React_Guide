import "../../assets/scss/components.scss";
import ManageMultiTable from "../../components/table/ManageMultiTable";
import ManageColumnTable from "../../components/table/ManageColumnTable";
import ManageTable from "../../components/table/ManageTable";
import ManageTatleTable from "../../components/table/ManageTatleTable";
import Breadcrumb from "../../components/typo/Breadcrumb";
import PageTitle from "../../components/typo/PageTitle";

const Table = () => {
  return (
    <>
      <section>
        <PageTitle>테이블 사용법</PageTitle>
        <Breadcrumb>HOME &lt; 테이블 사용법</Breadcrumb>
      </section>

      <article className="component-container">
        <h2 className="component-ttl">테이블</h2>
        <p className="component-desc">
          테이블은 두가지 이유로 컴포넌트화 하지 않습니다.
        </p>
        <p className="component-desc">1 데이터 연동</p>
        <p className="component-desc">2 테이블마다 다른 셀 내용</p>
        <p className="component-desc">
          프로젝트에서 사용시 해당 페이지에 복사 / 붙여넣기하기 편리하도록
          컴포넌트로 만들었습니다.
        </p>

      </article>

      <section className="component-container">
        <h3 className="component-sub-ttl">기본 테이블</h3>
        <p className="component-desc">셀(th, td)의 기본 클래스명은 cell cell-division 으로 셀의 너비는 150px입니다.</p>
        <p className="component-desc">체크박스가 있는 셀의 클래스명은 cell cell-chck 이며, 셀의 너비는 50px입니다.</p>
        <p className="component-desc">숫자가 적힌 셀의 클래스명은 cell cell-num 이며, 셀의 너비는 80px입니다.</p>
        <p className="component-desc">날짜가 적힌 셀의 클래스명은 cell cell-date 이며, 셀의 너비는 150px입니다.</p>
        <p className="component-desc">더보기버튼 셀의 클래스명은 cell cell-more 이며, 셀의 너비는 120px입니다.</p>
        <p className="component-desc">더보기버튼은 기획에 따라 popup연결시에는 button, 페이지 연결시에는 a 태그를 사용합니다.</p>

        <ManageTable />
      </section>

      <section className="component-container">
        <h3 className="component-sub-ttl">제목이 있는 테이블</h3>
        <p className="component-desc">제목셀의 클래스명은 cell cell-ttl이며, 말줄임표가 적용되어 있습니다.</p>
        <p className="component-desc">제목셀은 지정된 너비가 없이 여유부분을 최대한 차지합니다.</p>

        <ManageTatleTable />
      </section>

      <section className="component-container">
        <h3 className="component-sub-ttl">행방향 테이블</h3>
        <p className="component-desc">행방향 테이블은 thead가 생략됩니다.</p>
        <p className="component-desc">대신 첫 셀에 scope를 달아 테이블의 방향을 명시해줍니다..</p>

        <ManageColumnTable />
      </section>

      <section className="component-container">
        <h3 className="component-sub-ttl">양방향 테이블</h3>

        <ManageMultiTable />
      </section>
    </>
  );
};

export default Table;
