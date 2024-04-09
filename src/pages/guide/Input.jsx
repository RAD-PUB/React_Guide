import "../../assets/scss/components.scss";

const optList = [
  {text: "option01"},
  {text: "option02"},
  {text: "option03"}
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
            <span className="skyblue">class=</span
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
            <span className="skyblue">class=</span
            ><span className="green">&quot;inp-grp&quot;</span>&gt;<br />

            &lt;<span className="blue">label </span>
            <span className="skyblue">htmlFor=</span
            ><span className="green">&quot;text1&quot;</span>
            <span className="skyblue">class=</span>
            <span className="green">&quot;inp-label&quot;</span>&gt;레이블&lt;/<span
              className="blue"
              >label</span
            >&gt;<br />
            &lt;<span className="blue">input</span><br />
            <span className="skyblue">type= </span>
            <span className="green">&quot;text&quot;</span> <br />
            <span className="skyblue">id=</span>
            <span className="green">&quot;text1&quot;</span><br />
            <span className="skyblue">class=</span>
            <span className="green">&quot;input inp-txt&quot;</span><br />
            <span className="skyblue">placeholder=</span>
            <span className="green">&quot;placeholder&quot;</span> /&gt;<br />
            &lt;/<span className="blue">div</span>&gt;<br />
            &lt;<span className="blue">p</span> <span className="skyblue">class=</span>
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
            <span className="skyblue">class=</span>
            <span className="green">&quot;inp-grp&quot;</span>&gt;<br />

            &lt;<span className="blue">label </span>
            <span className="skyblue">htmlFor=</span>
            <span className="green">&quot;text1&quot;</span>
            <span className="skyblue">class=</span>
            <span className="green">&quot;inp-label&quot;</span>&gt;레이블&lt;/<span className="blue">label</span>&gt;<br />
            &lt;<span className="blue">input</span><br />
            <span className="skyblue">type=</span>
            <span className="green">&quot;text&quot;</span> <br /><span className="skyblue">id=</span>
            <span className="green">&quot;text1&quot;</span><br />
            <span className="skyblue">name=</span>
            <span className="green">&quot;text1&quot;</span><br />
            <span className="skyblue">class=</span>
            <span className="green">&quot;input inp-txt&quot;</span><br />
            <span className="skyblue">placeholder=</span>
            <span className="green">&quot;placeholder&quot;</span><br />
            <span className="skyblue">disabled</span>/&gt;<br />
            &lt;/<span className="blue">div</span>&gt;<br />
            <span className="people">&#47;&#47; input에 disabled 를 붙여줍니다.</span>
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
      </section>
    </>
  )
}

export default Input