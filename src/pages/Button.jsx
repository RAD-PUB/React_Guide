import "../assets/scss/components.scss";
import PageTitle from "../layouts/typo/PageTitle";
import Breadcrumb from "../layouts/typo/Breadcrumb";
import ButtonMedium from "../layouts/button/ButtonMedium";
import ButtonLarge from "../layouts/button/ButtonLarge";
import ButtonXLarge from "../layouts/button/ButtonXLarge";

const Button = () => {
  return (
    <>
      <section>
        <PageTitle>버튼 설명서</PageTitle>
        <Breadcrumb>Home &gt; 버튼 설명서</Breadcrumb>
      </section>

      <section>
        <h3 className="component-sub-ttl">버튼</h3>
        <p className="component-desc">
          개수가 늘어날 경우를 대비하여 btns-wrap을 한 단위로 사용합니다.
        </p>
        <p className="component-desc">버튼의 클래스는 oocss를 사용합니다.</p>

          {/* 버튼 크기관련 수정법 */}
        <aside className="component-container">
          <h3 className="component-sub-ttl">버튼 크기 추가 및 삭제</h3>
          <ol className="component-desc-list">
            <li>
              <p className="component-desc">버튼의 크기관련 스타일은 button.scss에서 추가합니다.</p>
              
              <div className="code-wrap">
                <div className="code">
                  <span className="blue">.btn-m</span>{'{'}<br />
                  <span className="skyblue dep1">height</span>: <span className="red">32px</span>;<br />
                  <span className="skyblue dep1">padding</span>: <span className="red">0 12px</span>;<br />
                  <span className="skyblue dep1">font-size</span>: <span className="red">rem{'(14)'}</span>;<br />
                  <span className="yellow">{'//'} 버튼 크기에 맞는 스타일 추가</span><br />
                  {'}'}
                </div>
              </div>
            </li>
  
            <li>
              <p className="component-desc">추가후, latouts/button에서 컴포넌트를 추가합니다.</p>
              
              <div className="code-wrap">
                <div className="code">
                  &lt; <span className="green">ButtonMedium</span> <span className="skyblue">color</span>{'="'}<span className="red">main</span>{'"'}
                  &gt;<span>버튼입니다</span>&lt;{'/'}<span className="green">ButtonMedium</span> &gt;
                </div>
              </div>
            </li>
  
            <li>
              <p className="component-desc">버튼 컴포넌트에서 color값을 확인후 작성해야 색이 생깁니다.</p>
              
              <div className="component-container">
                <div className="btns-wrap">
                  <ButtonMedium>컬러값을 넣지 않음</ButtonMedium>
                </div>

                <div className="btns-wrap">
                  <ButtonMedium color="main">컬러값을 넣음</ButtonMedium>
                </div>

                <div className="btns-wrap">
                  <ButtonMedium color="ghost-red">컬러값이 없음</ButtonMedium>
                </div>

                <div className="btns-wrap">
                  <ButtonMedium color="bd-red">컬러값이 있음</ButtonMedium>
                </div>
              </div>
            </li>
          </ol>
        </aside>

          {/* 버튼 색 관련 수정법 */}
        <aside className="component-container">
          <h3 className="component-sub-ttl">버튼 색 추가 및 삭제</h3>

          <ol className="component-desc-list">
            <li>
              <p className="component-desc">버튼의 색은 variabvle.scss의 $btn-color맵에 추가합니다.</p>
              
              <div className="code-wrap">
                <div className="code">
                  <span className="blue">$btn-color</span>{'{'}<br />
                  <span className="skyblue dep1">main</span>: <span className="people">main</span>,<br />
                  <span className="skyblue dep1">red</span>: <span className="people">red</span>,<br />
                  <span className="yellow">{'//'} 추가할 색 이름 : color-set 에 있는 색 이름</span><br />
                  {'}'}
                </div>
              </div>
            </li>
  
            <li>
              <p className="component-desc">추가후, latouts/button의 컴포넌트 상단 주석을 추가합니다.</p>
              
              <div className="code-wrap">
                <div className="code">
                  <span className="yellow">{'//'} color list</span><br />
                  <span className="yellow">{'//'} basic</span><br />
                  <span className="yellow">{'//'} blue</span><br />
                  <span className="yellow">{'//'} red</span><br />
                </div>
              </div>
            </li>

            <li>
              <p className="component-desc">컴포넌트 사용시, 변수color에 담아줍니다.</p>
              
              <div className="code-wrap">
                <div className="code">
                  &lt; <span className="green">ButtonMedium</span> <span className="skyblue">color</span>{'="'}<span className="red">main</span>{'"'}
                  &gt;<span>버튼입니다</span>&lt;{'/'}<span className="green">ButtonMedium</span> &gt;
                </div>
              </div>
            </li>
          </ol>
        </aside>

          {/* 버튼 사용 예시 */}
        <article>
          <h4 className="component-sub-ttl">button medium</h4>
          <div className="btns-wrap">
            <ButtonMedium color="basic">버튼은</ButtonMedium>
            <ButtonMedium color="main">모두</ButtonMedium>
            <ButtonMedium color="red">컴포넌트입니다</ButtonMedium>
          </div>
          <div className="btns-wrap">
            <ButtonMedium color="bd-basic">버튼은</ButtonMedium>
            <ButtonMedium color="bd-main">모두</ButtonMedium>
            <ButtonMedium color="bd-red">컴포넌트입니다</ButtonMedium>
          </div>
          
          <aside className="code-wrap">
            <div className="code">
              &lt; <span className="green">ButtonMedium</span> <span className="skyblue">color</span>{'="'}<span className="red">main</span>{'"'}
              &gt;<span>버튼입니다</span>&lt;{'/'}<span className="green">ButtonMedium</span> &gt;
            </div>
          </aside>

        </article>

        <article>
          <h4 className="component-sub-ttl">button large</h4>
          <div className="btns-wrap">
            <ButtonLarge color="basic">버튼은</ButtonLarge>
            <ButtonLarge color="main">모두</ButtonLarge>
            <ButtonLarge color="red">컴포넌트입니다</ButtonLarge>
          </div>
          <div className="btns-wrap">
            <ButtonLarge color="bd-basic">버튼은</ButtonLarge>
            <ButtonLarge color="bd-main">모두</ButtonLarge>
            <ButtonLarge color="bd-red">컴포넌트입니다</ButtonLarge>
          </div>
          
          <aside className="code-wrap">
            <div className="code">
              &lt; <span className="green">ButtonLarge</span> <span className="skyblue">color</span>{'="'}<span className="red">main</span>{'"'}
              &gt;<span>버튼입니다</span>&lt;{'/'}<span className="green">ButtonLarge</span> &gt;
            </div>
          </aside>

        </article>

        <article>
          <h4 className="component-sub-ttl">button medium</h4>
          <div className="btns-wrap">
            <ButtonXLarge color="basic">버튼은</ButtonXLarge>
            <ButtonXLarge color="main">모두</ButtonXLarge>
            <ButtonXLarge color="red">컴포넌트입니다</ButtonXLarge>
          </div>
          <div className="btns-wrap">
            <ButtonXLarge color="bd-basic">버튼은</ButtonXLarge>
            <ButtonXLarge color="bd-main">모두</ButtonXLarge>
            <ButtonXLarge color="bd-red">컴포넌트입니다</ButtonXLarge>
          </div>
          
          <aside className="code-wrap">
            <div className="code">
              &lt; <span className="green">ButtonXLarge</span> <span className="skyblue">color</span>{'="'}<span className="red">main</span>{'"'}
              &gt;<span>버튼입니다</span>&lt;{'/'}<span className="green">ButtonXLarge</span> &gt;
            </div>
          </aside>

        </article>
      </section>
    </>
  );
};

export default Button;
