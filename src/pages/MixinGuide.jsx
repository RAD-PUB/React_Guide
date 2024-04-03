import '../assets/scss/mixinGuide.scss'

const MixinGuide = () => {
    return (
        <>
          <p className="component-warning">
            (❁´◡`❁)본문의 코드는 참고용입니다.(❁´◡`❁)
          </p>
          <h2 className="main-ttl">믹스인 사용 설명서</h2>
          <p className="page-breadcrumb">Home &gt; 믹스인 사용 설명서</p>
  
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
  
            {/* <!-- START media --> */}
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
            {/* <!-- END media --> */}
  
            {/* <!-- START media-h --> */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include media-h</h3>
              <div className="component-desc">
                벨류로 해당 화면의 height를를 단위를 붙여 적고, 중괄호 안쪽에 스타일을
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
            {/* <!-- END media-h --> */}
  
            {/* <!-- START tablet --> */}
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
            {/* <!-- END tablet --> */}
  
            {/* <!-- START mobile --> */}
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
            {/* <!-- END mobile --> */}
          </section>
          {/* <!-- =================== END media query =================== --> */}
  
          {/* <!-- =================== START content size =================== --> */}
          <section className="component-container">
            <h2 className="component-ttl">크기</h2>
            <p className="component-desc">자주 사용하는 크기를 정의한 믹스인입니다.</p>
  
            {/* <!-- START circle --> */}
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
            {/* <!-- END circle --> */}
  
            {/* <!-- START square --> */}
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
            {/* <!-- END square --> */}
  
            {/* <!-- START full --> */}
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
            {/* <!-- END full --> */}
          </section>
          {/* <!-- =================== END content size =================== --> */}
  
          {/* <!-- =================== START display flex =================== --> */}
          <section className="component-container">
            <h2 className="component-ttl">flexible item</h2>
            <p className="component-desc">display flex를 짧게 사용하기 위해 정의한 믹스인입니다.</p>
  
            {/* <!-- START flex --> */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include flex</h3>
              <div className="component-desc">
                기본값은 display: flex. 벨류이 display로 리턴됩니다.
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
            {/* <!-- END flex --> */}
  
            {/* <!-- START flex-col --> */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include flex-col</h3>
              <div className="component-desc">
                flex의 방향이 column일 경우 사용합니다. 벨류는 위와같이 display로 리턴됩니다.
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
            {/* <!-- END flex-col --> */}
  
            {/* <!-- START flex-op --> */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include flex-op</h3>
              <div className="component-desc">
                flex의 축 정렬을 정의합니다.
              </div>
              <div className="component-desc">
                align-items / justift-content 순으로 적습니다.
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
            {/* <!-- END flex-op --> */}
  
            {/* <!-- START flex-center --> */}
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
            {/* <!-- END flex-center --> */}
  
            {/* <!-- START flex-btw --> */}
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
            {/* <!-- END flex-btw --> */}
  
          </section>
          {/* <!-- =================== END display flex =================== --> */}
  
          {/* <!-- =================== START background image =================== --> */}
          <section className="component-container">
            <h2 className="component-ttl">배경이미지</h2>
            <p className="component-desc">배경이미지관련 믹스인입니다.</p>
  
            {/* <!-- START backgroundimage url --> */}
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
                    {'(경로,"이미지명.jpg")'}의 형식으로 사용합니다.
                    {'*/'}
                  </span>
                </aside>
              </div>
            </article>
            {/* <!-- END backgroundimage url --> */}
  
            {/* <!-- START backgroundimage op --> */}
            <article className="mixin-wrapper">
              <h3 className="component-sub-ttl">@include bg-op</h3>
              <div className="component-desc">
                배경이미지를 사용할 때 쓰이는 속성을 정의합니다.
              </div>
              
              <div className="code-wrap">
                <aside className="code">
                  <span className="blue">.any-class</span>{'{'}<br />
                  <span className="people dep1">@include</span> <span className="yellow">bg-op</span>
                  (<span className="green">{'icon, "icon_arrow.svg"'}</span>);<br />
                  {'}'}<br />
                </aside>
              </div>
            </article>
            {/* <!-- END backgroundimage op --> */}
  
          </section>
          {/* <!-- =================== END background image =================== --> */}
  
          {/* <!-- END component --> */}
        </>
    )
}

export default MixinGuide