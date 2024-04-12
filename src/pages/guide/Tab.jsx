import { useState } from "react";
import "../../assets/scss/components.scss";
import Breadcrumb from "../../components/typo/Breadcrumb";
import PageTitle from "../../components/typo/PageTitle";

function Tab() {
  const [tabActive, setTabActive] = useState("tab2");

  const handleTabActive = (tabName) => {
    setTabActive(tabName);
  };

  return (
    <>
      <section>
        <PageTitle>탭 설명서</PageTitle>
        <Breadcrumb>HOME &lt; 탭 설명서</Breadcrumb>
      </section>

      <article className="component-container">
        <h2 className="component-ttl">탭</h2>
        <p className="component-desc"></p>
        {/* start TAB TITLE */}
        <ul className="tab-title-container">
          {/* title 1 */}
          <li className={`tab-title ${tabActive == "tab1" ? "active" : ""}`}>
            <button
              className="btn tab-title-txt"
              onClick={() => handleTabActive("tab1")}
            >
              첫문장
            </button>
          </li>
          {/* title2 */}
          <li className={`tab-title ${tabActive == "tab2" ? "active" : ""}`}>
            <button
              className="btn tab-title-txt"
              onClick={() => handleTabActive("tab2")}
            >
              전달사항 2번
            </button>
          </li>
          {/* title3 */}
          <li className={`tab-title ${tabActive == "tab3" ? "active" : ""}`}>
            <button
              className="btn tab-title-txt"
              onClick={() => handleTabActive("tab3")}
            >
              전달사항 3번
            </button>
          </li>
          {/* title4 */}
          <li className={`tab-title ${tabActive == "tab4" ? "active" : ""}`}>
            <button
              className="btn tab-title-txt"
              onClick={() => handleTabActive("tab4")}
            >
              전달사항 4번
            </button>
          </li>
        </ul>
        {/* start TAB CONTANT */}
        <div className="tab-content-container">
          {/* content 1 */}
          <section
            className={`tab-content ${tabActive == "tab1" ? "active" : ""}`}
          >
            <h3>
              탭의 활성화는 주석으로{" "}
              {" '탭 제목, 컨텐츠, 활성화시키는 클래스를 적어' "} 전달합니다.
            </h3>
          </section>
          {/* content 2 */}
          <section
            className={`tab-content ${tabActive == "tab2" ? "active" : ""}`}
          >
            <h3>
              개발작업이 많거나 퍼블 일정에 여유가 있다면 탭의 활성화도 해서
              전달합니다.
            </h3>
          </section>
          {/* content 3 */}
          <section
            className={`tab-content ${tabActive == "tab3" ? "active" : ""}`}
          >
            <h3>탭이 추가될 수 있으므로 주석으로 구분해줍니다.</h3>
          </section>
          {/* content 4 */}
          <section
            className={`tab-content ${tabActive == "tab4" ? "active" : ""}`}
          >
            <h3>상황에 따라 컴포넌트가 나을지 개발자와 협의합니다.</h3>
          </section>
        </div>
      </article>
    </>
  );
}

export default Tab;
