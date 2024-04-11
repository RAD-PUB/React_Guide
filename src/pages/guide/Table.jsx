import "../../assets/scss/components.scss";
import TableBoard from "../../components/table/TableBoard";
import TableColumn from "../../components/table/TableColumn";
import TableControlbar from "../../components/table/TableControlbar";
import TableDefualt from "../../components/table/TableDefualt";
import TableMulti from "../../components/table/TableMulti";
import TableSearchResult from "../../components/table/TableSearchResult";
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
        <ol className="component-desc-list">
          <li>데이터 연동</li>
          <li>테이블마다 다른 셀 내용</li>
        </ol>
        <p className="component-desc">
          프로젝트에서 사용시 해당 페이지에 복사 / 붙여넣기하기 편리하도록
          컴포넌트로 만들었습니다.
        </p>

      </article>

      <section className="component-container">
        <h3 className="component-sub-ttl">기본 테이블</h3>
        <p className="component-desc">셀(th, td)의 기본 클래스명은 cell cell-{'${number}'}로 셀의 너비가 숫자로 들어갑니다.</p>
        <p className="component-desc">현재 사용되는 클래스는 cell-80, cell-100, cell-120, cell-150, cell-180, cell-200 이 있으며 필요에 따라 추가하여 사용합니다.</p>
        <p className="component-desc">더보기버튼은 기획에 따라 popup연결시에는 button, 페이지 연결시에는 a 태그를 사용합니다.</p>
        <ul className="component-desc-list">
          <li>예외{']'} 체크박스가 있는 셀의 클래스명은 cell cell-chck 으로 셀의 너비는 50px입니다.</li>
          <li>예외{']'} 제목셀의 클래스명은 cell cell-ttl으로 말줄임표가 적용되고, 너비에 제한이 없습니다.</li>
        </ul>

        <TableDefualt />
      </section>

      <section className="component-container">
        <h3 className="component-sub-ttl">게시판 제목이 있는 테이블</h3>

        <TableBoard />
      </section>

      <section className="component-container">
        <h3 className="component-sub-ttl">행방향 테이블</h3>
        <p className="component-desc">행방향 테이블은 thead가 생략됩니다.</p>
        <p className="component-desc">대신 첫 셀에 scope를 달아 테이블의 방향을 명시해줍니다.</p>

        <TableColumn />
      </section>

      <section className="component-container">
        <h3 className="component-sub-ttl">양방향 테이블</h3>

        <TableMulti />
      </section>

      <section className="component-container">
        <h3 className="component-sub-ttl">버튼, 셀렉트가 있는 테이블</h3>

        <TableControlbar />
      </section>

      <section className="component-container">
        <h3 className="component-sub-ttl">테이블 검색결과</h3>

        <TableSearchResult />
      </section>
    </>
  );
};

export default Table;
