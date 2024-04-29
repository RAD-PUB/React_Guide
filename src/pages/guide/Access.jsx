import '../../assets/scss/components.scss'
import Breadcrumb from "../../components/typo/Breadcrumb";
import PageTitle from "../../components/typo/PageTitle";
const Access = () => {
  return (
    <>
      <section>
        <PageTitle>웹 접근성 정리</PageTitle>
        <Breadcrumb>HOME &gt; 웹 접근성 정리</Breadcrumb>
      </section>

      <section className="component-container">
        <h2 className="component-ttl">접근성</h2>
        <h3 className="component-sub-ttl">웹 접근성 지침</h3>
        <p>
        웹 접근성(별칭: a11y)은 모두가 사용할 수 있도록 웹사이트를 디자인, 개발하는 것을 의미합니다. 보조과학기술(assistive technology)들이 웹페이지들을 해석할 수 있도록 접근성을 갖추는 것이 필요합니다.

        React는 접근성을 갖춘 웹사이트를 만들 수 있도록 모든 지원을 하고 있으며, 대부분은 표준 HTML 기술이 사용됩니다.
        </p>
        <div className='component-desc accs'>
          <p>콘텐츠의 제목과 단락을 명확히 구분할 것</p>
          <ol className='component-desc-list'>
            <li>HTML 작성 시 제목 요소와 단락을 내용의 의미에 맞게 나누는 것이 중요</li>
            <li>레이아웃 작성 시, &lt;article&gt;이나 &lt;nav&gt;, &lt;footer&gt; 등의 요소를 적절히 사용할 것을 권장</li>
          </ol>
        </div>

        <div className='component-desc accs'>
          <p>키보드 동작을 제공할 것</p>
          <ol className='component-desc-list'>
            <li>&lt;button&gt;이나 &lt;input&gt;, &lt;select&gt; 요소를 사용하지 않고 &lt;div&gt;와 CSS만을 이용하여 구현하는 것을 지양</li>
            <li>이는 기본 요소들이 제공하는 키보드 동작들을 사용하지 못할 가능성이 있음</li>
            <li>Enter키나 Tab 키를 누를 때 해당 요소로 이동시키는 동작과 같은 상호작용들이 가능하도록 설계할 것</li>
            <li>&lt;div&gt; 요소를 반드시 사용해야 한다면, 몇 가지 추가적인 코드 작성을 할 것</li>
            <li>
              role : 해당 요소의 사용 목적을 작성. role=button으로 작성할 경우 스크린 리더에서 해당 요소를 버튼으로 인식함<br />
              tab-index : 해당 요소를 탭 키로 도달하게 하는 속성<br />
              키보드 이벤트 리스너 추가 : 버튼 동작이 엔터나 스페이스로 동작하게끔 자바스크립트 이벤트 추가
            </li>
          </ol>
          <div className='code-wrap'>
            <aside className='code'>
              <p>div 태그로 만든 버튼 예시</p>
              &lt;<span className='blue'>div</span><br />
              <span className='skyblue'>tabIndex=</span>
              <span className='green'>`0`</span><br />
              <span className='skyblue'>role=</span>
              <span className='green'>`button`</span><br />
              <span className='skyblue'>id=</span>
              <span className='green'>`button-id`</span>&gt;<br />
              &lt;/<span className='blue'>div</span>&gt;
            </aside>
          </div>
        </div>

        <div className='component-desc accs'>
          <p>Focus하는 지점을 명확히 할 것</p>
          <ol className='component-desc-list'>
            <li>장애가 있느 사람의 경우 키보드를 사용한 웹 조작 비중이 높기 때문에 키보드만으로 모든 기능이 동작 가능하도록 설계</li>
            <li>일반적으로 탭 키를 이용해 링크나 버튼, 텍스트를 입력하는 부분을 찾을 수 있도록 항목에 Focus할 수 있게 설계</li>
            <li>outline CSS 프로퍼티를 0이나 none으로 지정하는 것을 지양</li>
            <li>만약 focus 윤곽선을 지운다면 현재 어떤 요소를 focus하는지 추가로 나타내야 함</li>
          </ol>
        </div>

        <div className='component-desc accs'>
          <p>시맨틱 태그 사용</p>
          <ol className='component-desc-list'>
            <li>시맨틱 HTML은 웹 애플리케이션에 있어 접근성의 기초. 정보의 의미가 강조되는 HTML 엘리먼트를 웹 사이트에서 사용하면 자연스럽게 접근성이 갖추어질 수 있음</li>
            <li>React로 구성한 코드가 돌아가게 만들기 위해 div와 같은 엘리먼트를 사용해 HTML의 의미를 깨트림. 특히, 목록(ol, ul, dl)과 HTML table을 사용할 때 문제가 두드러 질 수 있음</li>
            <li>React에서는 위와 같은 문제를 해결하기 위해, React Fragment를 사용하여 여러 엘리먼트를 화나로 묶어주는 것을 권장하고 있음</li>
          </ol>
          <div className='code-wrap'>
            <aside className='code'>
              <p>Fragment사용 예시</p>
              <span className='blue'>import React, &#123;Fragment&#125; from `react`</span><br /><br />
              <span className='blue'>function ex(&#123;item&#125;) &#123;</span><br />
              <span className='blue'>return (</span><br />
              <span className='green'>&#47;&#47; Fragmemt단어를 생략하고 &lt;&gt; &lt;/&gt;로도 사용 가능</span><br />
              &lt;<span className='blue'>Fragment</span>&gt;<br />
              &lt;<span className='blue'>dt</span>&gt;
              &#123;<span className='skyblue'>item.term</span>&#125;
              &lt;/<span className='blue'>dt</span>&gt;<br />
              &lt;<span className='blue'>dt</span>&gt;
              &#123;<span className='skyblue'>item.term</span>&#125;
              &lt;/<span className='blue'>dt</span>&gt;<br />
              &lt;/<span className='blue'>Fragment</span>&gt;<br />
              <span className='blue'>);</span><br />
              <span className='blue'>&#125;</span>
            </aside>
          </div>
        </div>

        <div className='component-desc accs'>
          <p>WAI-ARIA(role)</p>
          <p>
            JSX에서는 모든 aria-* HTML 어트리뷰트를 지원하고 있음. React에서 대부분의 DOM 프로퍼티와 어트리뷰트에 대한 값이 캐멀 케이스로 지원되는 반면, aria-*와 같은 어트리뷰트는 일반적인 HTML과 마찬가지로 hypen-case(혹은 kebab-case, lisp-case 등)로 작성해야 됨
          </p>
          <ol className='component-desc-list'>
            <li>
              툴팁(role=`tooltip`)
              <p>
                툴팁은 앵커 또는 폼 콘트롤 요소에 대한 참고용 콘텐츠. 보통 마우스 오버 또는 키보드 초점을 받으면 표시하는 내용이지만 화면에 항상 표시할 수도 있음. 툴팁 요소에 role=`tooltip` 속성으로 명시 가능. 툴팁을 유발하는 앵커 또는 콘트롤에 aria-describedby=`ID reference list`` 속성을 명시하여 연결
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  <p>button tooltip</p>
                  &lt;<span className='blue'>button </span>
                  <span className='skyblue'>aria-describedb=`TIP-DEL`</span>&gt;
                  <span className='green'>게시물 삭제</span>
                  &lt;/<span className='blue'>button</span>&gt;<br />
                  &lt;<span className='blue'>p </span>
                  <span className='skyblue'>id=`TIP-DEL` role=`tooltip` hidden</span>&gt;
                  <span className='green'>게시물 삭제 후 복원할 수 없음</span>
                  &lt;/<span className='blue'>p</span>&gt;
                </aside>
              </div>
            </li>
            <li>
              성공(결과) 메시지(role=`status`)
              <p>
                성공(또는 결과) 상태 메시지를 사용자에게 전달하는 콘텐츠. 사용자의 현재 작업을 방해하지 않고(초점을 옮기지 않고) 보조기기 사용자에게 조언할만한 메시지를 전달하는 것을 의도하고 있음. role=`alert` 보다는 중요도가 떨어짐<br />
                성공 role=`status` 메시지는 초점을 받지 않도록 처리해야 함. role=`status` 요소는 aria-live=`polite` 속성과 aria-atomic=`true` 속성을 암시적으로 할당하기 때문에 추가로 선언할 필요가 없음. 성공 메시지 영역을 변경하면 화면 낭독기는 현재 진행 중인 음성 안내를 마친 후 성공 메시지 전체 내용을 사용자에게 전달
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  <p>success message</p>
                  &lt;<span className='blue'>p </span>
                  <span className='skyblue'>role=`status`</span>&gt;
                  <span className='green'>회원가입 양식 전송완료</span>
                  &lt;/<span className='blue'>p</span>&gt;<br /><br />

                  <p>result message</p>
                  &lt;<span className='blue'>p </span>
                  <span className='skyblue'>role=`status`</span>&gt;
                  <span className='green'>10개의 검색 결과</span>
                  &lt;/<span className='blue'>p</span>&gt;<br />
                  &lt;<span className='blue'>p </span>
                  <span className='skyblue'>role=`status`</span>&gt;
                  <span className='green'>장바구니에 5개의 항목</span>
                  &lt;/<span className='blue'>p</span>&gt;<br />
                </aside>
              </div>
            </li>
            <li>
              오류(제안) 메시지(role=`alert`)
              <p>
                시간에 민감하고 중요한(오류, 제안) 메시지를 사용자에게 전달하는 콘텐츠. 사용자의 현재 작업을 방해하지 않고(초점을 옮기지 않고) 보조기기 사용자에게 즉각 메시지를 전달하는 것을 의도하고 있음.<br />
                오류 role=`alert` 메시지는 초점을 받지 않도록 처리해야 함. role=`alert` 요소는 aria-live=`assertive` 속성과 aria-atomic=`true` 속성을 암시적으로 할당하기 때문에 추가로 선언할 필요가 없음. 오류 메시지 영역을 변경하면 화면 낭독기는 현재 진행 중인 음성 안내를 즉시 멈추고 오류 메시지 전체 내용을 사용자에게 전달함
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  <p>error message</p>
                  &lt;<span className='blue'>p </span>
                  <span className='skyblue'>role=`alert`</span>&gt;
                  <span className='green'>우편번호 입력 오류</span>
                  &lt;/<span className='blue'>p</span>&gt;<br /><br />

                  <p>proposal message</p>
                  &lt;<span className='blue'>p </span>
                  <span className='skyblue'>role=`alert`</span>&gt;
                  <span className='green'>로그인 후 이용 가능</span>
                  &lt;/<span className='blue'>p</span>&gt;<br /><br />
                </aside>
              </div>
            </li>
            <li>
              알럿 대화상자(role=`alertdialog`)
              <p>
                사용자 동의 또는 확인이 필요한 인터렉션 요소(input, button)를 포함한 상태로 다른 과업을 차단하는 경우 알럿 대화상자 role=`alertdialog`를 사용. 사용자 입력 없이 `확인, 취소`` 버튼을 제공하는 경우에 적절함.<br />
                알럿 대화상자에는 aria-labelledby=`ID reference list` 그리고 aria-describedby=`ID reference list` 속성으로 알럿 대화상자의 제목과 설명을 연결.<br />
                알럿 대화상자는 다른 과업을 차단해야 하기 때문에 모달 윈도우 스타일로 처리한 다음 aria-modal=`true` 속성을 추가.<br />
                알럿 대화상자를 표시할 때 키보드 초점을 대화상자 내부 첫 번째 콘트롤(예를 들면 `확인` 버튼 또는 `인풋`)으로 옮겨야 함. 알럿 대화상자를 표시하는 동안 초점은 대화상자 안에서 벗어나지 않아야 함
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  <p>대화상자</p>
                  &lt;<span className='blue'>section </span>
                  <span className='skyblue'>role=`dialog` aria-modal=`true` aria-labelledby=`TITLE`</span>&gt;<br />
                  &lt;<span className='blue'>h2 </span>
                  <span className='skyblue'>id=`title`</span>&gt;
                  <span className='green'>로그인</span>
                  &lt;/<span className='blue'>h2</span>&gt;
                  &lt;<span className='blue'>form</span>&gt;<br />
                  &lt;<span className='blue'>label </span>
                  <span className='skyblue'>for=`ID`</span>&gt;
                  <span className='green'>아이디</span>
                  &lt;/<span className='blue'>label</span>&gt;<br />
                  &lt;<span className='blue'>input </span>
                  <span className='skyblue'>id=`ID`</span>&gt;<br />
                  &lt;<span className='blue'>label </span>
                  <span className='skyblue'>for=`PW`</span>&gt;
                  <span className='green'>비밀번호</span>
                  &lt;/<span className='blue'>label</span>&gt;<br />
                  &lt;<span className='blue'>input </span>
                  <span className='skyblue'>id=`PW`</span>&gt;<br />
                  &lt;<span className='blue'>button</span>&gt;
                  <span className='green'>로그인</span>
                  &lt;/<span className='blue'>button</span>&gt;<br />
                  &lt;/<span className='blue'>section</span>&gt;
                </aside>
              </div>
            </li>
            <li>
              탐색(nav, role=`navigation`)
              <p>
                탐색은 현재 페이지 또는 연결된 페이지를 탐색하는 주요 탐색 블록(보통 링크 집합). 문서의 `주요 내용`을 탐색하는 경우에 사용하면 적절. 모든 링크 집합이 탐색 블록은 아님<br />
                탐색 블록에 적절한 HTML 요소는 nav 요소. role=`navigation`` 속성을 사용하기 전에 nav 요소를 먼저 고려해야함
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  <p>탐색</p>
                  <span className='green'>&#47;&#47; 탐색에 nav 요소를 권장</span><br />
                  &lt;<span className='blue'>nav</span>&gt;<br />
                  &lt;<span className='blue'>h2</span>&gt;
                  <span className='green'>글로벌 네비게이션</span>
                  &lt;/<span className='blue'>h2</span>&gt;<br />
                  &lt;/<span className='blue'>nav</span>&gt;<br />
                  <br />
                  <span className='green'>&#47;&#47; 탐색 역할을 하는 요소가 유일한 경우 레이블 생략 가능</span><br />
                  &lt;<span className='blue'>div </span>
                  <span className='skyblue'>role=`navigation`</span>&gt;<br />
                  &lt;<span className='blue'>h2</span>&gt;
                  <span className='green'>글로벌 네비게이션</span>
                  &lt;/<span className='blue'>h2</span>&gt;<br />
                  &lt;/<span className='blue'>div</span>&gt;<br />
                  <br />
                  <span className='green'>&#47;&#47; 탐색 역할이 둘 이상인 경우 레이블 제공(nav)</span><br />
                  &lt;<span className='blue'>nav </span>
                  <span className='skyblue'>aria-labelledby=`global-navigation`</span>&gt;<br />
                  &lt;<span className='blue'>h2 </span>
                  <span className='skyblue'>id=`global-navigation`</span>&gt;
                  <span className='green'>글로벌 네비게이션</span>
                  &lt;/<span className='blue'>h2</span>&gt;<br />
                  &lt;/<span className='blue'>nav</span>&gt;<br />

                  &lt;<span className='blue'>nav </span>
                  <span className='skyblue'>aria-labelledby=`notice-pagination`</span>&gt;<br />
                  &lt;<span className='blue'>h3 </span>
                  <span className='skyblue'>id=`notice-pagination`</span>&gt;
                  <span className='green'>공지사항 페이지네이션</span>
                  &lt;/<span className='blue'>h3</span>&gt;<br />
                  &lt;/<span className='blue'>nav</span>&gt;<br />
                  <br />
                  <span className='green'>&#47;&#47; 탐색 역할이 둘 이상인 경우 레이블 제공(role=`navigation`)</span><br />
                  &lt;<span className='blue'>div </span>
                  <span className='skyblue'>role=`navigation` aria-labelledby=`global-navigation`</span>&gt;<br />
                  &lt;<span className='blue'>h2 </span>
                  <span className='skyblue'>id=`global-navigation`</span>&gt;
                  <span className='green'>글로벌 네비게이션</span>
                  &lt;/<span className='blue'>h2</span>&gt;<br />
                  &lt;/<span className='blue'>div</span>&gt;<br />

                  &lt;<span className='blue'>div </span>
                  <span className='skyblue'>role=`navigation` aria-labelledby=`notice-navigation`</span>&gt;<br />
                  &lt;<span className='blue'>h3 </span>
                  <span className='skyblue'>id=`notice-navigation`</span>&gt;
                  <span className='green'>공지사항 네비게이션</span>
                  &lt;/<span className='blue'>h3</span>&gt;<br />
                  &lt;/<span className='blue'>div</span>&gt;<br />
                </aside>
              </div>
            </li>
            <li>
              의미 없음(role=`none`)
              <p>
                의미 없음(role=`none``)을 선언하는 경우 보조기기는 마크업의 의미를 제거 후 내용만 사용자에게 전달함. role=`none` 속성은 role=`presentation`과 동일하며 role=`presentation`을 대체함<br />
                HTML을 의미에 맞지 않게 마크업한 경우, 또는 스타일링에 필요한 마크업을 추가한 경우 role=`none`` 속성을 사용할 수 있음. 의미에 맞지 않는 마크업과 스타일을 위한 마크업을 권장하지 않기 때문에 이 속성은 사용을 자제해야 함
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  <p>tablist와 tab 사이 li 요소의 의미 제거</p>
                  &lt;<span className='blue'>ul </span>
                  <span className='skyblue'>role=`tablist`</span>&gt;<br />
                  &lt;<span className='blue'>li </span>
                  <span className='skyblue'>role=`none`</span>&gt;<br />
                  &lt;<span className='blue'>a </span>
                  <span className='skyblue'>href=`#none` role=`tab` aria-selected=`true`</span>&gt;
                  <span className='green'>홈</span>
                  &lt;/<span className='blue'>a</span>&gt;<br />
                  &lt;/<span className='blue'>li</span>&gt;<br />
                  
                  &lt;<span className='blue'>li </span>
                  <span className='skyblue'>role=`none`</span>&gt;<br />
                  &lt;<span className='blue'>a </span>
                  <span className='skyblue'>href=`#ongoing` role=`tab` aria-selected=`false`</span>&gt;
                  <span className='green'>연재</span>
                  &lt;/<span className='blue'>a</span>&gt;<br />
                  &lt;/<span className='blue'>li</span>&gt;<br />

                  &lt;<span className='blue'>li </span>
                  <span className='skyblue'>role=`none`</span>&gt;<br />
                  &lt;<span className='blue'>a </span>
                  <span className='skyblue'>href=`#ranking` role=`tab` aria-selected=`false`</span>&gt;
                  <span className='green'>랭킹</span>
                  &lt;/<span className='blue'>a</span>&gt;<br />
                  &lt;/<span className='blue'>li</span>&gt;<br />
                  &lt;/<span className='blue'>ul</span>&gt;<br />
                </aside>
              </div>
            </li>
            <li>
              선택 상태(aria-selected=`true|false|undefined`)
              <p>
                aria-selected 속성은 단일 또는 다중 선택이 가능한 요소(role=`gridcell|option|row|tab`)에 한하여 선택 상태를 명시하는 용도로 사용. role=`tab` 요소에 가장 흔하게 사용함. 키보드 초점을 받을 수 있는 요소에 적용해야 됨<br />
                - undefined(default): 속성 또는 값을 선언하지 않은 경우 초기값. 선택할 수 없음<br />
                - true: 선택 가능한 요소를 선택했음<br />
                - false: 선택 가능한 요소를 선택하지 않았음<br />
                선택 요소에만 aria-selected=`true` 속성을 적용하면 aria-selected 속성을 적용하지 않은 요소는 aria-selected=`undefined` 상태(선택할 수 없음)가 됨. 따라서 선택하지 않은 요소에는 명시적으로 aria-selected=`false` 속성과 값을 적용
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  &lt;<span className='blue'>div </span>
                  <span className='skyblue'>role=`tablist`</span>&gt;<br />
                  &lt;<span className='blue'>a </span>
                  <span className='skyblue'>id=`mon-anchor` href=`#mon` role=`tab` aria-selected=`true`</span>&gt;
                  <span className='green'>월</span>
                  &lt;/<span className='blue'>a</span>&gt;<br />

                  &lt;<span className='blue'>a </span>
                  <span className='skyblue'>id=`tue-anchor` href=`#tue` role=`tab` aria-selected=`false`</span>&gt;
                  <span className='green'>화</span>
                  &lt;/<span className='blue'>a</span>&gt;<br />
                  &lt;<span className='blue'>div</span>&gt;
                </aside>
              </div>
            </li>
            <li>
              확장 상태(aria-expanded=`true|false|undefinded`)
              <p>
                aria-expanded 속성은 제어 대상의 확장 또는 축소 상태를 나타냄. 어코디언, 메뉴, 콤보박스, 트리와 같이 하위 그룹(또는 독립적인) 내용을 토글(열기, 닫기)하는 경우에 사용하면 적절. 독립적인 내용을 제어할 때 aria-controls 속성을 이용하여 제어 대상을 명시해야 함<br />
                - undefined(default): 속성 또는 값을 선언하지 않은 경우 초기값. 제어 대상이 없거나 모두 확장 상태. 확장/축소 제어 불가능.<br />
                - true: 요소 또는 제어 대상 확장 상태.<br />
                - false: 요소 또는 제어 대상 축소 상태.
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  &lt;<span className='blue'>dt</span>&gt;<br />
                  &lt;<span className='blue'>button </span>
                  <span className='skyblue'>type=`button` aria-controls=`answer-99` aria-expanded=`false`</span>&gt;
                  <span className='green'>보너스 코인은 언제 소진되나요?</span>
                  &lt;/<span className='blue'>button</span>&gt;<br />
                  &lt;/<span className='blue'>dt</span>&gt;<br />
                  &lt;<span className='blue'>dd </span>
                  <span className='skyblue'>id=`answer-99` hidden</span>&gt;<br />
                  &lt;<span className='blue'>p</span>&gt;
                  <span className='green'>만료기한이 짧은 보너스 코인이 일반 코인보다 먼저 소진됩니다.</span>
                  &lt;/<span className='blue'>p</span>&gt;<br />
                  &lt;/<span className='blue'>dd </span>&gt;
                </aside>
              </div>
            </li>
            <li>
              숨김 상태(aria-hidden=`true|false|undefined`)
              <p>
                aria-hidden 속성은 접근성 API(보조기기 접근 가능성) 차단 상태를 결정. 화면에 표시하지만 잠시 사용을 제한하는 콘텐츠에 적용. 예를 들면 모달 대화상자를 화면에 표시할 때 모달 대화상자 뒤 본문 콘텐츠에 aria-hidden=`true` 속성을 선언하면 보조기기가 무시함<br />
                - undefined(default): 속성 또는 값을 선언하지 않은 경우 초기값. 화면 표시 여부에 따라 접근성 API 차단 상태를 결정. 화면에 표시하면 false, 화면에서 숨기면 true.<br />
                - true: 접근성 API 차단.(화면 표시 여부와 무관 API 차단)<br />
                - false: 접근성 API 사용.(화면에 표시한 경우 API 사용)
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  &lt;<span className='blue'>body</span>&gt;<br />
                  &lt;<span className='blue'>div </span>
                  <span className='skyblue'>className=`container` aria-hidden=`true`</span>&gt;<br />
                  <span className='green'>&#47;&#47; 보조기기가 무시하는 영역</span><br />
                  &lt;/<span className='blue'>div</span>&gt;<br />
                  &lt;<span className='blue'>div </span>
                  <span className='skyblue'>role=`alertdialog` aria-modal=`true` aria-labelledby=`TITLE` aria-describedby=`DESCRIPTION`</span>&gt;<br />
                  &lt;<span className='blue'>h2 </span>
                  <span className='skyblue'>id=`TITLE`</span>&gt;
                  <span className='green'>레진패스 안내</span>
                  &lt;/<span className='blue'>h2</span>&gt;<br />
                  &lt;<span className='blue'>p </span>
                  <span className='skyblue'>id=`DESCRIPTION`</span>&gt;
                  <span className='green'>이 작품의 유료 에피소드 열람 시 자동으로 구매합니다. 레진패스를 적용하시겠습니까?</span>
                  &lt;/<span className='blue'>p</span>&gt;<br />
                  &lt;/<span className='blue'>div</span>&gt;<br />
                  &lt;/<span className='blue'>body</span>&gt;
                </aside>
              </div>
            </li>
            <li>
              제어 대상(aria-controls=`ID reference list`)
              <p>
                aria-controls 속성은 현재 요소가 제어하는 대상을 명시하는 속성. 주로 role=`tab`, aria-haspopup, aria-expanded 속성과 함께 button 요소가 무엇을 제어하는지 명시. aria-controls 속성의 값은 하나 또는 그 이상의 ID 값을 의미. 흔한 경우는 아니지만 ID 값이 여럿인 경우 ID 값을 공백으로 분리함
              </p>
              <div className='code-wrap'>
                <aside className='code'>
                  &lt;<span className='blue'>div </span>
                  <span className='skyblue'>role=`tablist`</span>&gt;<br />
                  &lt;<span className='blue'>button </span>
                  <span className='skyblue'>type=`button` id=`mon-anchor` aria-controls=`mon` role=`tab` aria-selected=`true`</span>&gt;
                  <span className='green'>월</span>
                  &lt;/<span className='blue'>button</span>&gt;<br />
                  &lt;<span className='blue'>button </span>
                  <span className='skyblue'>type=`button` id=`tue-anchor` aria-controls=`tue` role=`tab` aria-selected=`true`</span>&gt;
                  <span className='green'>화</span>
                  &lt;/<span className='blue'>button</span>&gt;<br />
                  &lt;/<span className='blue'>div</span>&gt;<br />
                  <br />
                  &lt;<span className='blue'>div </span>
                  <span className='skyblue'>id=`mon` tabindex=`0` role=`tabpanel` aria-labelledby=`mon-anchor`</span>&gt;<br />
                  <span className='green'>월요일 컨텐츠...</span><br />
                  &lt;/<span className='blue'>div</span>&gt;<br />
                  &lt;<span className='blue'>div </span>
                  <span className='skyblue'>id=`tue` tabindex=`0` role=`tabpanel` aria-labelledby=`tue-anchor` hidden</span>&gt;<br />
                  <span className='green'>화요일 컨텐츠...</span><br />
                  &lt;/<span className='blue'>div</span>&gt;<br />
                  <br />
                  &lt;<span className='blue'>button </span>
                  <span className='skyblue'>type=`button` aria-haspopup=`dialog` aria-controls=`login-dialog`</span>&gt;
                  <span className='green'>로그인</span>
                  &lt;/<span className='blue'>button</span>&gt;<br />
                  &lt;<span className='blue'>section </span>
                  <span className='skyblue'>id=`login-dialog` role=`dialog` aria-labelledby=`login-heading` aria-modal=`true` hidden</span>&gt;<br />
                  &lt;<span className='blue'>h2 </span>
                  <span className='skyblue'>id=`login-heading`</span>&gt;
                  <span className='green'>로그인</span>
                  &lt;/<span className='blue'>h2</span>&gt;<br />
                  <span className='green'>...</span><br />
                  &lt;/<span className='blue'>section</span>&gt;
                </aside>
              </div>
            </li>
          </ol>
        </div>

      </section>
    </>
  )
}

export default Access