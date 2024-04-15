import "../../assets/scss/components.scss";

const optList = [
  {text: "option01-1"},
  {text: "option01-2"},
  {text: "option01-3"}
]

const optList2 = [
  {text: "option02-1"},
  {text: "option02-2"},
  {text: "option02-3"}
]

const optList3 = [
  {text: "option03-1"},
  {text: "option03-2"},
  {text: "option03-3"}
]

const Input = () => {
  return (
    <>
      <h2 className="main-ttl">인풋 사용 설명서</h2>
      <p className="page-breadcrumb">Home &gt; 인풋 사용 설명서</p>

      <section className="component-container">
        <h2 className="component-ttl">input</h2>
        <p className="component-desc">
          인터렉션을 대비해 inp-grp를 한 단위로 사용됩니다.<br />
          인풋의 클래스네이밍 또한 oocss를 사용합니다.
        </p>
        <h3 className="component-sub-ttl">글쓰는 영역의 경우</h3>
        <div className="inp-grp">
          <label 
            className="inp-label"
            htmlFor="text1"
          >
            레이블
          </label>
          <input 
            type="text" 
            id="text1"
            name="text1"
            className="input inp-txt"
            placeholder="placeholder"
          />
        </div>

        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">class=</span
            ><span className="green">&quot;inp-grp&quot;</span>&gt;<br />

            &lt;<span className="blue">label </span>
            <span className="skyblue">htmlFor=</span
            ><span className="green">&quot;text1&quot;</span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-label&quot;</span>&gt;레이블&lt;/<span
              className="blue"
              >label</span
            >&gt;<br />
            &lt;<span className="blue">input</span><br />
            <span className="skyblue">type=</span><span className="green">&quot;text&quot;</span
            ><br />
            <span className="skyblue">id=</span><span className="green">&quot;text1&quot;</span
            ><br />
            <span className="skyblue">name=</span
            ><span className="green">&quot;text1&quot;</span><br />
            <span className="skyblue">className=</span
            ><span className="green">&quot;input inp-txt&quot;</span><br />
            <span className="skyblue">placeholder=</span
            ><span className="green">&quot;placeholder&quot;</span> /&gt;<br />
            &lt;/<span className="blue">div</span>&gt;<br />
            <span className="people">
              &#47;&#47;input은 무조건 label을 붙이고, label의 for, input의 id를 연결해줍니다.
            </span>
          </aside>
        </div>

        <h3 className="component-sub-ttl">유효성 검사</h3>
        <div className="inp-grp">
          <label 
            htmlFor="text2"
            className="inp-label"
          >
            레이블
          </label>
          <input 
            type="text" 
            id="text1"
            name="text1"
            className="input inp-txt"
            placeholder="placeholder"
          />
        </div>
        <p className="inp-vali">유효하지 않습니다.</p>

        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span
            ><span className="green">&quot;inp-grp&quot;</span>&gt;<br />

            &lt;<span className="blue">label </span>
            <span className="skyblue">htmlFor=</span
            ><span className="green">&quot;text1&quot;</span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-label&quot;</span>&gt;레이블&lt;/<span
              className="blue"
              >label</span
            >&gt;<br />
            &lt;<span className="blue">input</span><br />
            <span className="skyblue">type= </span>
            <span className="green">&quot;text&quot;</span> <br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;text1&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-txt&quot;</span><br />
            <span className="skyblue">placeholder=</span>
            <span className="green">&quot;placeholder&quot;</span> /&gt;<br />
            &lt;/<span className="blue">div</span>&gt;<br />
            &lt;<span className="blue">p</span> <span className="skyblue">className=</span>
            <span className="green">&quot;inp-vali&quot;</span>&gt;유효하지 않습니다.&lt;/<span className="blue">p</span>&gt;<br />
            <span className="people">&#47;&#47; 유효성 검사 문구는 inp-grp의 형제로 들어갑니다.</span>
          </aside>
        </div>

        <h3 className="component-sub-ttl">글쓰는 영역이 비활성화 된 경우</h3>
        <div className="inp-grp">
          <label htmlFor="text3" className="inp-label">레이블</label>
          <input 
            type="text" 
            id="text2"
            name="text2"
            className="input inp-txt"
            placeholder="placeholder"
            disabled
          />
        </div>

        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />

            &lt;<span className="blue">label </span>
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;text1&quot;</span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-label&quot;</span>&gt;레이블&lt;/<span className="blue">label</span>&gt;<br />
            &lt;<span className="blue">input</span><br />
            <span className="skyblue">type=</span>
            <span className="green">&quot;text&quot;</span> <br /><span className="skyblue">id=</span>
            <span className="green">&quot;text1&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;text1&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-txt&quot;</span><br />
            <span className="skyblue">placeholder=</span>
            <span className="green">&quot;placeholder&quot;</span><br />
            <span className="skyblue">disabled</span>/&gt;<br />
            &lt;/<span className="blue">div</span>&gt;<br />
            <span className="people">&#47;&#47; input에 disabled 를 붙여줍니다.</span>
          </aside>
        </div>

        <h3 className="component-sub-ttl">여러줄 글쓰는 영역의 경우</h3>
        <div className="inp-grp">
          <label 
            htmlFor="text3"
            className="inp-label"
          >
            레이블
          </label>
          <textarea 
            name="text3" 
            id="text3" 
            className="input inp-area" 
            placeholder="placeholder"
          >
          </textarea>
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">label </span>
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;text3&quot;</span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-label&quot;</span>&gt;레이블&lt;/<span className="blue">label</span>&gt;<br />
            &lt;<span className="blue">textarea</span><br/>
            <span className="skyblue">name=</span>
            <span className="green">&quot;text3&quot;</span><br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;text3&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-area&quot;</span><br />
            <span className="skyblue">placeholder=</span>
            <span className="green">&quot;placeholder&quot;</span><br />
            &lt;/<span className="blue">textarea</span>&gt;<br />
            &lt;/<span className="blue">div</span>&gt;
          </aside>
        </div>

        <h3 className="component-sub-ttl">달력: 기간선택</h3>
        <div className="inp-grp">
          <label 
            htmlFor="cal2-1"
            className="inp-label"
          >
            기간
          </label>
          <input 
            type="date" 
            id="cal2-1"
            name="cal2-1"
            className="input inp-date"
          />
          <span className="date-icon">~</span>
          <label 
            htmlFor="cal2-2"
            className="inp-label"
          >
            기간
          </label>
          <input 
            type="date" 
            id="cal2-2"
            name="cal2-2"
            className="input inp-date"
          />
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;cal2-1&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-label&quot;</span>&gt;<br />
            <span>기간</span><br />
            &lt;<span className="blue">label</span>/&gt;<br />
            &lt;<span className="blue">input</span><br/>
            <span className="skyblue">type=</span>
            <span className="green">&quot;date&quot;</span><br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;cal2-1&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;cal2-1&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-date&quot;</span><br />/&gt;<br />  
            &lt;<span className="blue">span </span>
            <span className="skyblue">class=</span>
            <span className="green">&quot;date-icon&quot;</span>&gt;
            <span>~</span>

            &lt;<span className="blue">/span</span>&gt;<br />
          
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;cal2-2&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-label&quot;</span>&gt;<br />
            <span>기간</span><br />
            &lt;<span className="blue">label</span>/&gt;<br />
            &lt;<span className="blue">input</span><br/>
            <span className="skyblue">type=</span>
            <span className="green">&quot;date&quot;</span><br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;cal2-2&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;cal2-2&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-date&quot;</span><br />/&gt;<br />
            &lt;/<span className="blue">div</span>&gt;
          </aside>
        </div>

        <h3 className="component-sub-ttl">달력 단독사용</h3> 
        <div className="inp-grp">
          <label htmlFor="cal1" className="inp-label">기간</label>
          <input
            type="date"
            id="cal1"
            name="cal1"
            className="input inp-date inp-date-single"
          />
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;cal1&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-label&quot;</span>&gt;<br />
            <span>기간</span><br />
            &lt;<span className="blue">label</span>/&gt;<br />
            &lt;<span className="blue">input</span><br/>
            <span className="skyblue">type=</span>
            <span className="green">&quot;date&quot;</span><br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;cal1&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;cal1&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-date&quot;</span><br />/&gt;<br />
            &lt;/<span className="blue">div</span>&gt;
          </aside>
        </div>

        <h3 className="component-sub-ttl">셀렉트</h3>
        <div className="inp-grp">
          <select name="select1" id="select1" className="input inp-select">
            {optList.map((it, index)=>(
              <option
                key={index} 
                value={it.text}
              >
                {it.text}
              </option>
            ))}
          </select>
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">select1</span><br/>
            <span className="skyblue">name=</span>
            <span className="green">&quot;select1&quot;</span><br/>
            <span className="skyblue">id=</span>
            <span className="green">&quot;select1&quot;</span><br/>
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-select&quot;</span>&gt;<br/>
            &#123;<span className="blue">optList.map((it, index)=&gt;(<br />&lt;option<br /><span className="skyblue">key=&#123;index&#125;</span><br /><span className="skyblue">value=&#123;it.text&#125;</span></span><br/>
            &#123;it.text&#125;<br />
            &lt;/<span className="blue">option</span>&gt;<br/>
            &lt;/<span className="blue">select</span>&gt;<br/>
            &lt;/<span className="blue">div</span>&gt;
          </aside>
        </div>

        <h3 className="component-sub-ttl">셀렉트 두개 나란히</h3>
        <div className="inp-grp">
          <select name="select1" id="select1" className="input inp-select">
            {optList.map((it, index)=>(
              <option
                key={index} 
                value={it.text}
              >
                {it.text}
              </option>
            ))}
          </select>

          <select name="select2" id="select2" className="input inp-select">
            {optList2.map((it, index)=>(
              <option
                key={index} 
                value={it.text}
              >
                {it.text}
              </option>
            ))}
          </select>
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">select</span><br/>
            <span className="skyblue">name=</span>
            <span className="green">&quot;select1&quot;</span><br/>
            <span className="skyblue">id=</span>
            <span className="green">&quot;select1&quot;</span><br/>
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-select&quot;</span>&gt;<br/>
            &#123;<span className="blue">optList.map((it, index)=&gt;(<br />&lt;option<br /><span className="skyblue">key=&#123;index&#125;</span><br /><span className="skyblue">value=&#123;it.text&#125;</span></span>&gt;<br/>
            &#123;it.text&#125;<br />
            &lt;/<span className="blue">option</span>&gt;<br/>
            &lt;/<span className="blue">select</span>&gt;<br /><br />

            &lt;<span className="blue">select</span><br/>
            <span className="skyblue">name=</span>
            <span className="green">&quot;select2&quot;</span><br/>
            <span className="skyblue">id=</span>
            <span className="green">&quot;select2&quot;</span><br/>
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-select&quot;</span>&gt;<br/>
            &#123;<span className="blue">optList2.map((it, index)=&gt;(<br />&lt;option<br /><span className="skyblue">key=&#123;index&#125;</span><br /><span className="skyblue">value=&#123;it.text&#125;</span></span>&gt;<br/>
            &#123;it.text&#125;<br />
            &lt;/<span className="blue">option</span>&gt;<br/>
            &lt;/<span className="blue">select</span>&gt;<br />
            &lt;/<span className="blue">div</span>&gt;
          </aside>
        </div>

        <h3 className="component-sub-ttl">셀렉트 옆에 인풋이 있는 경우</h3>
        <div className="inp-grp">
          <select name="select1" id="select1" className="input inp-select">
            {optList3.map((it, index)=>(
              <option
                key={index} 
                value={it.text}
              >
                {it.text}
              </option>
            ))}
          </select>
          <label htmlFor="text4" className="inp-label">레이블</label>
          <input 
            type="text" 
            id="text4"
            name="text4"
            className="input inp-txt"
            placeholder="placeholder"
          />
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">select</span><br/>
            <span className="skyblue">name=</span>
            <span className="green">&quot;select1&quot;</span><br/>
            <span className="skyblue">id=</span>
            <span className="green">&quot;select1&quot;</span><br/>
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-select&quot;</span>&gt;<br/>
            &#123;<span className="blue">optList.map((it, index)=&gt;(<br />&lt;option<br /><span className="skyblue">key=&#123;index&#125;</span><br /><span className="skyblue">value=&#123;it.text&#125;</span></span><br/>
            &#123;it.text&#125;<br />
            &lt;/<span className="blue">option</span>&gt;<br/>
            &lt;/<span className="blue">select</span>&gt;<br/>
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;text4&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-label&quot;</span><br />
            &lt;<span className="blue">label</span>/&gt;<br />
            &lt;<span className="blue">input</span><br/>
            <span className="skyblue">type=</span>
            <span className="green">&quot;text&quot;</span><br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;text4&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;text4&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;input inp-txt&quot;</span><br />
            <span className="skyblue">placeholder=</span>
            <span className="green">&quot;placeholder&quot;</span>/&gt;<br />
            &lt;/<span className="blue">div</span>&gt;
          </aside>
        </div>

        <h3 className="component-sub-ttl">체크박스</h3>
        <div className="inp-grp">
          <input type="checkbox" id="chk01" name="chk01" className="inp-chck d-none" />
          <label htmlFor="chk01" className="chck-icon">선택</label>
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">input</span><br />
            <span className="skyblue">type=</span>
            <span className="green">&quot;checkbox&quot;</span><br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;chk01&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;chk01&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-chck d-none&quot;</span>/&gt;<br />
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;chk01&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;chck-icon&quot;</span>/&gt;<br />
            <span>선택</span><br />
            &lt;<span className="blue">label</span>/&gt;
          </aside>
        </div>

        <h3 className="component-sub-ttl">체크박스 체크되었을 경우</h3>
        <div className="inp-grp">
          <input type="checkbox" id="chk02" name="chk02" className="inp-chck d-none" checked />
          <label htmlFor="chk02" className="chck-icon">선택</label>
        </div>

        <h3 className="component-sub-ttl">체크박스 disabled</h3>
        <div className="inp-grp">
          <input type="checkbox" id="chk03" name="chk03" className="inp-chck d-none" disabled />
          <label htmlFor="chk03" className="chck-icon">선택</label>
        </div>

        <h3 className="component-sub-ttl">체크박스 옆에 문구가 있는 경우</h3>
        <div className="inp-grp">
          <input type="checkbox" id="chk04" name="chk04" className="inp-chck d-none" />
          <label htmlFor="chk04" className="chck-icon">선택</label>
          <label htmlFor="chk04" className="chck-txt">문구도 선택영역입니다.</label>
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">input</span><br />
            <span className="skyblue">type=</span>
            <span className="green">&quot;checkbox&quot;</span><br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;chk04&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;chk04&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-chck d-none&quot;</span>/&gt;<br />
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;chk04&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;chck-icon&quot;</span>/&gt;<br />
            <span>선택</span><br />
            &lt;<span className="blue">label</span>/&gt;<br />
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;chk04&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;chck-txt&quot;</span>/&gt;<br />
            <span>문구도 선택영역입니다.</span><br />
            &lt;<span className="blue">label</span>/&gt;<br />
          </aside>
        </div>

        <h3 className="component-sub-ttl">라디오 버튼</h3>
        <div className="inp-grp">
          <input type="radio" name="rdo01" id="rdo01" className="inp-radio d-none" />
          <label htmlFor="rdo01" className="radio-icon">선택</label>
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">input</span><br />
            <span className="skyblue">type=</span>
            <span className="green">&quot;radio&quot;</span><br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;rdo01&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;rdo01&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-radio d-none&quot;</span><br />
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;rdo01&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;chck-icon&quot;</span>/&gt;<br />
            <span>선택</span><br />
            &lt;<span className="blue">label</span>/&gt;
          </aside>
        </div>

        <h3 className="component-sub-ttl">라디오 버튼 체크되었을 경우</h3>
        <div className="inp-grp">
          <input type="radio" name="rdo02" id="rdo02" className="inp-radio d-none" checked />
          <label htmlFor="rdo02" className="radio-icon">선택</label>
        </div>

        <h3 className="component-sub-ttl">라디오 버튼 disabled</h3>
        <div className="inp-grp">
          <input type="radio" name="rdo03" id="rdo03" className="inp-radio d-none" disabled />
          <label htmlFor="rdo03" className="radio-icon">선택</label>
        </div>

        <h3 className="component-sub-ttl">라디오 버튼 옆에 문구가 있는 경우</h3>
        <div className="inp-grp">
          <input type="radio" name="rdo04" id="rdo04" className="inp-radio d-none" />
          <label htmlFor="rdo04" className="radio-icon">선택</label>
          <label htmlFor="rdo04" className="radio-txt">문구도 선택영역입니다.</label>
        </div>
        <div className="code-wrap">
          <aside className="code">
            &lt;<span className="blue">div </span>
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />
            &lt;<span className="blue">input</span><br />
            <span className="skyblue">type=</span>
            <span className="green">&quot;radio&quot;</span><br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;rdo04&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;rdo04&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;inp-radio d-none&quot;</span><br />
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;rdo04&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;radio-icon&quot;</span>/&gt;<br />
            <span>선택</span><br />
            &lt;<span className="blue">label</span>/&gt;<br />
            &lt;<span className="blue">label </span><br />
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;rdo04&quot;</span><br />
            <span className="skyblue">className=</span>
            <span className="green">&quot;radio-txt&quot;</span>/&gt;<br />
            <span>문구도 선택영역입니다.</span><br />
            &lt;<span className="blue">label</span>/&gt;
          </aside>
        </div>
      </section>
    </>
  )
}

export default Input