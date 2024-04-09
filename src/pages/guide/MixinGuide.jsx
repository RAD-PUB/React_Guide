import '../../assets/scss/components.scss'
import '../../assets/scss/mixinGuide.scss'

const MixinGuide = () => {
    return (
        <>
          <h2 className="main-ttl">믹스인 사용 설명서</h2>
          <p className="page-breadcrumb">Home &gt; 믹스인 사용 설명서</p>
          <p className="component-warning">
            (❁´◡`❁)본문의 코드는 참고용입니다.(❁´◡`❁)<br />
          </p>
          <div className="component-desc">
            파일 위치 : scss//utility/_mixin.scss<br />
            사용하기전에 믹스인의 세부 내용을 프로젝트에 맞춰 변경해 사용해주세요.<br />
            (mobile/tablet의 시작점, custom-scroll의 색, 크기 등)
          </div>

          {/* =================== START media query =================== */}
          <section className="component-container">
            <h2 className="component-ttl">반응형</h2>
            <p className="component-desc">미디어쿼리와 관련된 믹스인입니다.</p>
  
            <div className="ex ex1">
              1570에서 하늘색박스<br />
              height 600에서 분홍색박스<br />
              태블릿에서 빨간색 테두리<br />
              모바일에서 흰색에 빨간 테두리
            </div>
  
            {/* START media */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include media</h3>
              <div className="component-desc">
                벨류로 해당 화면의 width를 단위를 붙여 적고, 중괄호 안쪽에 스타일을
                적습니다.
              </div>
              <div className="component-desc">
                하단의 코드는 max-width 1570px 부터 display: none이 되는
                예시입니다.
              </div>

              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span>
                  <span className="yellow">media</span>{'('}<span className="green">1570px</span>{') {'}<br />
                  <span className="skyblue dep2">display</span>: <span className="red">none</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END media */}
  
            {/* START media-h */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include media-h</h3>
              <div className="component-desc">
                벨류로 해당 화면의 height를 단위를 붙여 적고, 중괄호 안쪽에 스타일을
                적습니다.
              </div>
              <div className="component-desc">
                하단의 코드는 max-height 600px 부터 display: none이 되는
                예시입니다.
              </div>
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span>
                  <span className="yellow">media-h</span>{'('}<span className="green">600px</span>{') {'}<br />
                  <span className="skyblue dep2">display</span>: <span className="red">none</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END media-h */}
  
            {/* START tablet */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include tablet</h3>
              <div className="component-desc">
                태블릿부터 적용될 스타일을 적습니다.
              </div>
              <div className="component-desc">
                하단의 코드는 태블릿화면부터(현재 프로젝트는 768px, 대부분 1024px)
                display: none이 되는 예시입니다.
              </div>
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span>
                  <span className="yellow">tablet</span> {'{'}<br />
                  <span className="skyblue dep2">display</span>:
                  <span className="red">none</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END tablet */}
  
            {/* START mobile */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include mobile</h3>
              <div className="component-desc">
                모바일에서만 적용될 스타일을 적습니다.
              </div>
              <div className="component-desc">
                하단의 코드는 모바일화면부터(현재 프로젝트는 512px) display: none이 되는
                예시입니다.
              </div>
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span>
                  <span className="yellow">mobile</span> {'{'}<br />
                  <span className="skyblue dep2">display</span>:
                  <span className="red">none</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END mobile */}
          </section>
          {/* =================== END media query =================== */}
  
          {/* =================== START content size =================== */}
          <section className="component-container">
            <h2 className="component-ttl">크기</h2>
            <p className="component-desc">자주 사용하는 크기를 정의한 믹스인입니다.</p>
  
            {/* START circle */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include circle</h3>
              <div className="component-desc">
                벨류로 크기를 적되, 단위를 붙여 적습니다.
              </div>
              <div className="ex ex2">원</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">circle</span>
                  (<span className="green">50px</span>);<br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END circle */}
  
            {/* START square */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include square</h3>
              <div className="component-desc">
                벨류로 크기를 적되, 단위를 붙여 적습니다.
              </div>
              <div className="ex ex3">box</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">square</span>
                  (<span className="green">50px</span>);<br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END square */}
  
            {/* START full */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include full</h3>
              <div className="component-desc">
                추가 작성없이 include만 합니다.
              </div>
              <div className="ex ex4"><div>box</div></div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span>
                  <span className="yellow">full</span>;<br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END full */}
          </section>
          {/* =================== END content size =================== */}
  
          {/* =================== START display flex =================== */}
          <section className="component-container">
            <h2 className="component-ttl">flexible item</h2>
            <p className="component-desc">display flex를 짧게 사용하기 위해 정의한 믹스인입니다.</p>
  
            {/* START flex */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include flex</h3>
              <div className="component-desc">
                기본값은 display: flex.
              </div>
              <div className="component-desc">
                flex관련 스타일은 중괄호 안쪽에 적습니다.
              </div>
              <div className="ex-flex ex5">
                <div>box1</div>
                <div>box2</div>
                <div>box3</div>
                <div>box4</div>
            </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex</span>;<br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex</span>
                  (<span className="green">inline-flex</span>);<span className="people dep1">{'//'} display: inline-flex;</span><br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex</span>(<span className="green">inline-flex</span>) {'{'}<br />
                    <span className="people dep2">@include</span> <span className="yellow">flex-op</span>(<span className="green">center, center</span>);<span className="people dep1">{'//'} flex-op은 하단에 서술</span><br />
                  <span className="skyblue dep2">gap</span>:<span className="red">10px</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END flex */}
  
            {/* START flex-col */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include flex-col</h3>
              <div className="component-desc">
                flex의 방향이 column일 경우 사용합니다.
              </div>
              <div className="component-desc">
                flex관련 스타일은 중괄호 안쪽에 적습니다.
              </div>
              <div className="ex-flex ex6">
                <div>box1</div>
                <div>box2</div>
                <div>box3</div>
                <div>box4</div>
            </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex-col</span>;<br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex-col</span>
                  (<span className="green">inline-flex</span>);<span className="people dep1">{'//'} display: inline-flex;</span><br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex-col</span>(<span className="green">inline-flex</span>) {'{'}<br />
                  <span className="skyblue dep2">gap</span>:<span className="red">10px</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END flex-col */}
  
            {/* START flex-op */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include flex-op</h3>
              <div className="component-desc">
                flex의 축 정렬을 정의합니다.
              </div>
              <div className="component-desc">
                align-items, justift-content 순으로 적습니다.
              </div>
              <div className="ex-flex ex5">
                <div>box1</div>
                <div>box2</div>
                <div>box3</div>
                <div>box4</div>
            </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex</span> {'{'}<br />
                    <span className="people dep2">@include</span> <span className="yellow">flex-op</span>(<span className="green">center, space-between</span>);<br />
                    <span className="people dep1">{'//'} align-ttems: center; justify-content: space-between;</span><br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex</span> {'{'}<br />
                    <span className="people dep2">@include</span> <span className="yellow">flex-op</span>(<span className="green">$ai:center, $jc: flex-end</span>);<br />
                    <span className="people dep1">{'//'} align-ttems: center; justify-content: flex-end;</span><br />
  
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex</span> {'{'}<br />
                    <span className="people dep2">@include</span> <span className="yellow">flex-op</span>(<span className="green">$ai:center</span>);
                    <span className="people dep1">{'//'} align-ttems: center;</span><br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex</span> {'{'}<br />
                    <span className="people dep2">@include</span> <span className="yellow">flex-op</span>(<span className="green">$jc:center</span>);
                    <span className="people dep1">{'//'} justify-content: center;</span><br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END flex-op */}
  
            {/* START flex-center */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include flex-center</h3>
              <div className="component-desc">
                flex를 활용하여 가운데 정렬할 때 사용합니다.
              </div>
              <div className="component-desc">
              </div>
              <div className="ex-flex ex7">
                <div>box1</div>
                <div>box2</div>
                <div>box3</div>
                <div>box4</div>
            </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex-center</span>;<br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex-center</span>
                  (<span className="green">inline-flex</span>);<span className="people dep1">{'//'} display: inline-flex;</span><br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex-center</span>(<span className="green">inline-flex</span>) {'{'}<br />
                  <span className="skyblue dep2">gap</span>:<span className="red">10px</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END flex-center */}
  
            {/* START flex-btw */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include flex-btw</h3>
              <div className="component-desc">
                flex에서 양옆으로 같은 간격을 둔 레이아웃(space-btween)에 사용합니다.
              </div>
              <div className="component-desc">
              </div>
              <div className="ex-flex ex8">
                <div>box1</div>
                <div>box2</div>
                <div>box3</div>
                <div>box4</div>
            </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex-btw</span>;<br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex-btw</span>
                  (<span className="green">inline-flex</span>);<span className="people dep1">{'//'} display: inline-flex;</span><br />
                  {'}'}
                </aside>
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">flex-btw</span>(<span className="green">inline-flex</span>) {'{'}<br />
                  <span className="skyblue dep2">flex-wrap</span>:<span className="red">wrap</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END flex-btw */}
  
          </section>
          {/* =================== END display flex =================== */}
  
          {/* =================== START background image =================== */}
          <section className="component-container">
            <h2 className="component-ttl">배경이미지</h2>
            <p className="component-desc">배경이미지관련 믹스인입니다.</p>
  
            {/* START backgroundimage url */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include bg-url</h3>
              <div className="component-desc">
                배경이미지의 경로를 variable.scss와 function.scss의 세팅값으로 한번에 변경가능합니다.
              </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bg-url</span>
                  (<span className="green">{'icon, "icon_arrow.svg"'}</span>);<br />
                  {'}'}<br />
                  <span className="people">
                    {'/* '}
                    vatiable.scss의 $path-set 맵에서 경로를 저장하여 불러옵니다.<br />
                    $path-set을 function.scss의 path와 urlpath 함수를 통해 불러와 사용됩니다.<br />
                    {'(경로,"이미지명.jpg")'}으로 작성합니다.
                    {'*/'}
                  </span>
                </aside>
              </div>
            </article>
            {/* END backgroundimage url */}
  
            {/* START backgroundimage op */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include bg-op</h3>
              <div className="component-desc">
                배경이미지를 사용할 때 쓰이는 속성을 정의합니다.
              </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bg-op</span>;<br />
                  <span className="people dep1">
                    {'//'} position: center; size: auto; repeat: no-repeat; 
                  </span>
                  {'}'}<br />
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bg-op</span>
                  (<span className="green">{'center top, cover, repeat-x'}</span>);<br />
                  <span className="people dep1">
                    {'//'} position: center top; size: cover; repeat: repeat-x; 
                  </span>
                  {'}'}<br />
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bg-op</span>
                  (<span className="green">{'$s: 100%'}</span>);<br />
                  <span className="people dep1">
                    {'//'} position: center; size: 100%; repeat: no-repeat; 
                  </span>
                  {'}'}<br />
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bg-op</span>
                  (<span className="green">{'$p:center top, $r:repeat-x'}</span>);<br />
                  <span className="people dep1">
                    {'//'} position: center top; size: auto; repeat: repeat-x; 
                  </span>
                  {'}'}<br />
                </aside>
              </div>
            </article>
            {/* END backgroundimage op */}
  
          </section>
          {/* =================== END background image =================== */}
  
          {/* =================== START before, after =================== */}
          <section className="component-container">
            <h2 className="component-ttl">가상요소</h2>
            <p className="component-desc">가상요소인 before, after를 생성하는 믹스인입니다.</p>
  
            {/* START make-before */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include make-before</h3>
              <div className="component-desc">
                가상요소인 before를 생성합니다.
              </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">make-before</span>;<br />
                  {'}'}<br />
                  <span className="people">
                    {'//'} :before {'{content: ""; display: block;}'}
                  </span>
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">make-before</span>
                  (<span className="green">$c: {'"content"'}</span>);<br />
                  {'}'}<br />
                  <span className="people">
                    {'//'} :before {'{content: "content"; display: block;}'}
                  </span>
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">make-before</span>
                  (<span className="green">$d: inline</span>);<br />
                  {'}'}<br />
                  <span className="people">
                    {'//'} :before {'{content: ""; display: inline;}'}
                  </span>
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">make-before</span>
                  (<span className="green">{'"content"'}, inline-block</span>){'{'}<br />
                  <span className="skyblue dep2">key</span>: <span className="red">value</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}<br />
                  <span className="people">
                    {'//'} :before {'{content: "content"; display: inline-block;}'}
                  </span>
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">make-before</span> {'{'}<br />
                  <span className="skyblue dep2">position</span>: <span className="red">absolute</span>;<br />
                  <span className="skyblue dep2">top</span>: <span className="red">0</span>;<br />
                  <span className="skyblue dep2">left</span>: <span className="red">0</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}<br />
                  <span className="people">
                    {'//'} :before {'{content: ""; display: block; position: absolute; top: 0; left: 0;}'}
                  </span>
                </aside>
              </div>
            </article>
            {/* END make-before */}
  
            {/* START make-after */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include make-after</h3>
              <div className="component-desc">
                가상요소인 after를 생성합니다.
              </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">make-after</span>;<br />
                  {'}'}<br />
                  <span className="people">
                    {'//'} :after {'{content: ""; display: block;}'}
                  </span>
                </aside>
              </div>
            </article>
            {/* END make-after */}
  
            {/* START make-virtual */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include make-virtual</h3>
              <div className="component-desc">
                가상요소 before, after를 한번에 생성합니다.
              </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">make-virtual</span>;<br />
                  {'}'}<br />
                  <span className="people">
                    {'/* '} 
                    :before {'{content: ""; display: block;}'}<br />
                    :after {'{content: ""; display: block;}'}
                    {' */'}
                  </span>
                </aside>
              </div>
            </article>
            {/* END make-virtual */}
          </section>
          {/* =================== END before, after =================== */}
  
          {/* =================== START input status =================== */}
          <section className="component-container">
            <h2 className="component-ttl">입력란, 버튼 상태</h2>
            <p className="component-desc">input의 상태 관련 믹스인입니다.</p>
  
            {/* START hover */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include hover</h3>
              <div className="component-desc">
                버튼 혹은 입력란에 hover & focus가 되었을 때의 스타일을 지정합니다.
              </div>
              <div className="inp-ex"><input type="text" placeholder='호버해주세요' /></div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">hover</span>{'{'}<br />
                  <span className="skyblue dep2">border</span>: <span className="red">1px solid blue</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END hover */}
  
            {/* START active */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include active</h3>
              <div className="component-desc">
                버튼 혹은 입력란에 active가 되었을 때의 스타일을 지정합니다.
              </div>
              <div className="inp-ex"><input type="text" placeholder='클릭을 유지해주세요' /></div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">active</span>{'{'}<br />
                  <span className="skyblue dep2">background-color</span>: <span className="red">beige</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END active */}
  
            {/* START disabled */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include disabled</h3>
              <div className="component-desc">
                버튼 혹은 입력란이 비활성화 되었을 때의 스타일을 지정합니다.
              </div>
              <div className="inp-ex"><input type="text" placeholder='비활성화되었습니다.' disabled /></div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">disabled</span>{'{'}<br />
                  <span className="skyblue dep2">background-color</span>: <span className="red">lightgray</span>;<br />
                  <span className="skyblue dep2">border-color</span>: <span className="red">gray</span>;<br />
                  <span className="dep1">{'}'}</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END disabled */}
          </section>
          {/* =================== END input status =================== */}
  
          {/* =================== START scroll custom =================== */}
          <section className="component-container">
            <h2 className="component-ttl">스크롤</h2>
            <p className="component-desc">스크롤 커스텀 관련 믹스인입니다.</p>
            <p className="component-desc">스크롤을 커스텀할 경우 일관된 스타일을 가지기 위해 지정합니다.</p>
  
            {/* START custom-scroll */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include custom-scroll</h3>
              <div className="component-desc">
                스크롤 디자인 변경용 믹스인입니다.<br />
                컴포넌트에 사용할 경우, 해당 영역에 height를 지정하여야 스크롤이 생성됩니다.
              </div>
              <div className="scroll-ex1"><div>scroll box</div></div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">custom-scroll</span>
                  (<span className="green"></span>);<br />
                  {'}'}
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">custom-scroll</span>
                  (<span className="green">{'($c:thumbColor, $sub-c:trackColor, $r: borderRadius, $s:trackWidth)'}</span>);<br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END custom-scroll */}
  
            {/* START hide-scroll */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include hide-scroll</h3>
              <div className="component-desc">
                스크롤 디자인 변경용 믹스인입니다.<br />
                컴포넌트에 사용할 경우, 해당 영역에 height를 지정하여야 스크롤이 생성됩니다.
              </div>
              <div className="scroll-ex2"><div>scroll box</div></div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">hide-scroll</span>
                  (<span className="green"></span>);<br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END hide-scroll */}
          </section>
          {/* =================== END scroll custom =================== */}

          {/* =================== START ellipse =================== */}
          <section className="component-container">
            <h2 className="component-ttl">문단 줄임</h2>
            <p className="component-desc">문단 말줄임표관련 믹스인입니다.</p>
  
            {/* START ellipse */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include ellipse</h3>
              <div className="component-desc">
                문단에 말줄임표를 적용할 때 사용합니다.
              </div>
              <div className="ex-t ex9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">ellipse</span>
                  (<span className="green">2, 24px</span>);<br />
                  {'}'}<br />
                  <span className="people">
                    {'/*'} 
                    line수, line-height크기를 적으며 두 값은 필수 입력값입니다. <br />
                    line-height값은 line수에 따른 height값에도 들어가기때문에 꼭! 단위도 붙여야 합니다.
                    {'*/'}
                  </span>
                </aside>
              </div>
            </article>
            {/* END ellipse */}
  
            {/* START remove-ellipse */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include remove-ellipse</h3>
              <div className="component-desc">
                내용 더보기 버튼같이 한 화면에서 문단 말줄임표를 없애는 경우 사용합니다.
              </div>
              <div className="ex-t ex9-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">remove-ellipse</span>;<br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END remove-ellipse */}
  
          </section>
          {/* =================== END ellipse =================== */}

          {/* =================== START typograph =================== */}
          <section className="component-container">
            <h2 className="component-ttl">타이포그래프</h2>
            <div className="component-desc">
              디자인 가이드가 있을 경우, 지정된 폰트 형태만 사용하여 각 타이포를 믹스인으로 사용합니다.
            </div>
            <div className="component-desc">때문에 일정한 타이포그래프를 사용하지 않을 때에는 삭제하는 것을 권장합니다.</div>
  
            {/* START ttl-style01 */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include ttl-style01</h3>
              <div className="ex-t ex10-1">typograph 미리보기</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">ttl-style01</span>;<br />
                  <span className="people dep1">{'//'} font-size: 30px(rem으로 컴파일됨); font-weight: 600;</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END ttl-style01 */}
  
            {/* START ttl-style02 */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include ttl-style02</h3>
              <div className="ex-t ex10-2">typograph 미리보기</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">ttl-style02</span>;<br />
                  <span className="people dep1">{'//'} font-size: 24px(rem으로 컴파일됨); font-weight: 600;</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END ttl-style02 */}
  
            {/* START bd-style01 */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include bd-style01</h3>
              <div className="ex-t ex10-3">typograph 미리보기</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bd-style01</span>;<br />
                  <span className="people dep1">{'//'} font-size: 18px(rem으로 컴파일됨); font-weight: 400;</span><br />
                  {'}'}
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bd-style01</span>
                  (<span className="green">{'500'}</span>);<br />
                  <span className="people dep1">{'//'} font-size: 18px(rem으로 컴파일됨); font-weight: 500;</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END bd-style01 */}
  
            {/* START bd-style02 */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include bd-style02</h3>
              <div className="ex-t ex10-4">typograph 미리보기</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bd-style02</span>;<br />
                  <span className="people dep1">{'//'} font-size: 16px(rem으로 컴파일됨); font-weight: 400;</span><br />
                  {'}'}
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bd-style02</span>
                  (<span className="green">{'500'}</span>);<br />
                  <span className="people dep1">{'//'} font-size: 16px(rem으로 컴파일됨); font-weight: 500;</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END bd-style02 */}
  
            {/* START bd-style03 */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include bd-style03</h3>
              <div className="ex-t ex10-5">typograph 미리보기</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bd-style03</span>;<br />
                  <span className="people dep1">{'//'} font-size: 14px(rem으로 컴파일됨); font-weight: 400;</span><br />
                  {'}'}
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bd-style03</span>
                  (<span className="green">{'500'}</span>);<br />
                  <span className="people dep1">{'//'} font-size: 14px(rem으로 컴파일됨); font-weight: 500;</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END bd-style03 */}
  
            {/* START bd-style04 */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include bd-style04</h3>
              <div className="ex-t ex10-6">typograph 미리보기</div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bd-style04</span>;<br />
                  <span className="people dep1">{'//'} font-size: 12px(rem으로 컴파일됨); font-weight: 400;</span><br />
                  {'}'}
                </aside>

                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bd-style04</span>
                  (<span className="green">{'500'}</span>);<br />
                  <span className="people dep1">{'//'} font-size: 12px(rem으로 컴파일됨); font-weight: 500;</span><br />
                  {'}'}
                </aside>
              </div>
            </article>
            {/* END bd-style04 */}
  
          </section>
          {/* =================== END typograph =================== */}
          
  
          {/* END component */}
        </>
    )
}

export default MixinGuide