import "../../assets/scss/components.scss";
import Breadcrumb from "../../components/typo/Breadcrumb";
import PageTitle from "../../components/typo/PageTitle";
import SubTitle from "../../components/typo/SubTitle";

function Typo () {
  return (
    <>
      {/* page title */}
        <PageTitle>문단스타일 가이드</PageTitle>
        <Breadcrumb>Home &gt; 문단스타일 가이드</Breadcrumb>
      <section>
        <h1 className="component-sub-ttl">페이지 제목</h1>
        <PageTitle>페이지제목 컴포넌트입니다.</PageTitle>
        
        <aside className="code-wrap">
          <div className="code">
            &lt; <span className="green">PageTitle</span>
            &gt;<span>페이지제목</span>&lt;{'/'}<span className="green">PageTitle</span> &gt;
          </div>
        </aside>
      </section>

      <section>
        <h1 className="component-sub-ttl">페이지 분류</h1>
        <Breadcrumb>Home &gt; 관리자 관리 &gt; 관리자 목록 / 컴포넌트입니다.</Breadcrumb>
        
        <aside className="code-wrap">
          <div className="code">
            &lt; <span className="green">Breadcrumb</span>
            &gt;<span>Home &gt; 관리자 관리</span>&lt;{'/'}<span className="green">Breadcrumb</span> &gt;
          </div>
        </aside>
      </section>

      <section>
        <h1 className="component-sub-ttl">중간 제목</h1>
        <SubTitle>중간 제목 컴포넌트입니다</SubTitle>
        
        <aside className="code-wrap">
          <div className="code">
            &lt; <span className="green">SubTitle</span>
            &gt;<span>중간 제목</span>&lt;{'/'}<span className="green">SubTitle</span> &gt;
          </div>
        </aside>
      </section>

      <section>
        <h1 className="component-sub-ttl">내용</h1>
        <div className="component-desc">여기에 사용된 코드는 믹스인가이드를 참고해주세요.</div>

        <div className="conponent-desc">
          <p className="bd-style01">
            내용에 쓰이는 글씨중 큰 사이즈
            <br />
            믹스인 bd-style01 을 적용합니다.
            <br />
            <br />
          </p>
        </div>
        <div className="component-desc">
          <p className="bd-style01-b">
            내용에 쓰이는 글씨중 큰 사이즈를 강조
            <br />
            믹스인 bd-style01(600) 을 적용합니다.
            <br />
            <br />
          </p>
        </div>
        <div className="component-desc">
          <p className="bd-style02">
            내용에 쓰이는 글씨의 기본 사이즈
            <br />
            믹스인 bd-style02 을 적용합니다.
            <br />
            <br />
          </p>
        </div>
        <div className="component-desc">
          <p className="bd-style02-b">
            내용에 쓰이는 글씨의 기본 사이즈를 강조
            <br />
            믹스인 bd-style02(600) 을 적용합니다.
            <br />
            <br />
          </p>
        </div>
        <div className="component-desc">
          <p className="bd-style03">
            내용에 쓰이는 글씨중 작은 사이즈
            <br />
            믹스인 bd-style03 을 적용합니다.
            <br />
            <br />
          </p>
        </div>
        <div className="component-desc">
          <p className="bd-style03-b">
            내용에 쓰이는 글씨중 작은 사이즈를 강조
            <br />
            믹스인 bd-style03(600) 을 적용합니다.
            <br />
            <br />
          </p>
        </div>
        <div className="component-desc">
          <p className="bd-style04">
            내용에 쓰이는 글씨중 추가 설명
            <br />
            믹스인 bd-style04 을 적용합니다.
            <br />
            <br />
          </p>
        </div>
        <div className="component-desc">
          <p className="bd-style04-b">
            내용에 쓰이는 글씨중 추가 설명을 강조
            <br />
            믹스인 bd-style04(600) 을 적용합니다.
            <br />
            <br />
          </p>
        </div>
      </section>
    </>
  );
}

export default Typo;
