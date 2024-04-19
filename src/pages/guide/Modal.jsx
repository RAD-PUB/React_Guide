import { useState } from 'react'
import '../../assets/scss/components.scss'
import Layer from '../../components/modal/Layer';
import Alert from '../../components/modal/Alert';
import Confirm from '../../components/modal/Confirm';
import Breadcrumb from "../../components/typo/Breadcrumb";
import PageTitle from "../../components/typo/PageTitle";

function Modal () {
  const [modalType, setModalType] = useState(null);

  const closeModal = () => {
    setModalType(null);
  }

  const openModal = (type) => {
    setModalType(type);
  }
  return(
      <>
        <section>
          <PageTitle>modal 설명서</PageTitle>
          <Breadcrumb>HOME &gt; 탭 설명서</Breadcrumb>
        </section>

        <section className='component-container'>
          <h2 className='component-ttl'>modal</h2>
          <div className='code-wrap'>
            <aside className='code'>
              <p>modal useState</p>
              <span className='blue'>const [modalType, setModalType] = </span>
              <span className='skyblue'>useState(null)</span><br /><br />

              <p>modal close event</p>
              <span className='blue'>const closeModal = </span>
              <span className='skyblue'>() =&gt; &#123;</span><br />
              <span className='skyblue'>setModalType(null);</span><br />
              <span className='skyblue'>&#125;</span><br /><br />

              <p>modal open event</p>
              <span className='blue'>const openModal = </span>
              <span className='skyblue'>() =&gt; &#123;</span><br />
              <span className='skyblue'>setModalType(type);</span><br />
              <span className='skyblue'>&#125;</span>
            </aside>
          </div>
          <h3 className="component-sub-ttl">alert modal(children 사용)</h3>
          <div className='btns-wrap'>
            <button 
              className='btn btn-xl btn-main'
              onClick={() => openModal('alertChildren')}
            >
              alert
            </button>
          </div>
          {modalType === 'alertChildren' && (
            <Layer>
              <div className="modal mini-modal">
                <div className="modal-bg"></div>
                <div className="modal-container">
                  <div className="modal-hd">
                    <h2 className="modal-ttl">Alert</h2>
                    <button 
                      className="btn btn-close"
                      onClick={closeModal}
                    >
                      모달 닫기 버튼
                    </button>
                  </div>
                  <div className="alert-conts-wrapper">
                    <h3 className="alert-cont">children 사용한 alert 입니다.</h3>
                    <div className="btns-wrap">
                      <button
                        className="btn btn-m btn-main"
                        onClick={closeModal}
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Layer>
          )}

          <div className='code-wrap'>
            <aside className='code'>
              <p>클릭하는 버튼의 타입과 modal의 타입을 비교 후 타입이 일치하면 `Layer` 컴포넌트 호출</p>
              &lt;<span className='blue'>button</span><br />
              <span className='skyblue'>className= </span>
              <span className='green'>`btn btn-xl btn-main`</span><br />
              <span className='skyblue'>onClick=&#123;()=&gt; openModal(`alertChildren`)&#125;</span>&gt;<br /><br />

              <span className='blue'>&#123;modalType === `alertChildren` && (</span><br />
              <span className='green'>&lt;Layer&gt;</span><br />
              &lt;<span className='blue'>div </span>
              <span className='skyblue'>className= </span>
              <span className='green'>modal mini-modal</span>&gt;<br />
              modal 마크업<br />
              &lt;<span className='blue'>/div</span>&gt;<br />
              <span className='green'>&lt;/Layer&gt;</span><br />
              <span className='blue'>)&#125;</span>
            </aside>
          </div>
          
          <h3 className='component-sub-ttl'>confirm modal(children 사용)</h3>
          <div className='btns-wrap'>
            <button
              className='btn btn-xl btn-main'
              onClick={() => openModal('confirmChildren')}
            >
              confirm
            </button>
            
          </div>
          {modalType === 'confirmChildren' && (
            <Layer>
              <div className="modal mini-modal">
                <div className="modal-bg"></div>
                <div className="modal-container">
                  <div className="modal-hd">
                    <h2 className="modal-ttl">Confirm</h2>
                    <button 
                      className="btn btn-close"
                      onClick={closeModal}
                    >
                      모달 닫기 버튼
                    </button>
                  </div>
                  <div className="alert-conts-wrapper">
                    <h3 className="alert-cont">children 사용한 confirm 입니다.</h3>
                    <div className="btns-wrap">
                      <button
                        className="btn btn-m btn-main"
                        onClick={closeModal}
                      >
                        예
                      </button>
                      <button
                        className='btn btn-m btn-bd-main'
                        onClick={closeModal}
                      >아니오</button>
                    </div>
                  </div>
                </div>
              </div>
            </Layer>
          )}

          <h3 className='component-sub-ttl'>alert modal</h3>
          <div className='btns-wrap'>
            <button
              className='btn btn-xl btn-main'
              onClick={() => openModal('alert')}
            >
              alert
            </button>
          </div>
          {modalType === 'alert' && (
            <Alert closeModal={closeModal} />
          )}

          <div className='code-wrap'>
            <aside className='code'>
              <p>클릭하는 버튼의 타입과 modal의 타입을 비교 후 타입이 일치하면 `Alert` 컴포넌트 호출</p>
              &lt;<span className='blue'>button</span><br />
              <span className='skyblue'>className= </span>
              <span className='green'>`btn btn-xl btn-main`</span><br />
              <span className='skyblue'>onClick=&#123;()=&gt; openModal(`alert`)&#125;</span>&gt;<br /><br />

              <p>`closeModal`을 props로 전달하여 modal 닫기버튼 클릭 시 state값을 변경</p>
              <span className='blue'>&#123;modalType === `alert` && (</span><br />
              <span className='green'>&lt;Alert </span>
              <span className='skyblue'>closeModal=&#123;closeModal&#125;</span>
              <span className='green'>/&gt;</span><br />
              <span className='blue'>)&#125;</span>
            </aside>
          </div>

          <h3 className='component-sub-ttl'>confirm modal</h3>
          <div className='btns-wrap'>
            <button
              className='btn btn-xl btn-main'
              onClick={() => openModal('confirm')}
            >
              confirm
            </button>
          </div>
          {modalType === 'confirm' && (
            <Confirm closeModal={closeModal} />
          )}
        </section>
      </>
  )
}

export default Modal